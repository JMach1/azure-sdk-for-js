import {assert} from "chai"
import JSZip from "jszip"
import {generateArchive, TScaffoldTech} from "../src"

const TEST_CONFIG = {
  name: "contoso-app",
  displayName: "Contoso App",
}

const technologies: TScaffoldTech[] = ["typescript", "react"]

technologies.forEach(tech => {
  describe(`Scaffolder – ${tech}`, async function() {
    let scaffold: typeof JSZip

    it("scaffolds", async function() {
      // @ts-ignore
      scaffold = await generateArchive({...TEST_CONFIG, tech}, {})
      const buffer = scaffold.generateAsync({type: "blob"}) // nodebuffer

      assert.ok(await JSZip.loadAsync(buffer))
    })

    it("replaces value in package.json", async function() {
      const json = JSON.parse(await scaffold.file("package.json")?.async("string") ?? "")

      assert.equal(json.name, TEST_CONFIG.name)
    })

    it("encodes fonts properly", async function() {
      const content = await scaffold.file("src/styles/fonts/OpenSans-Light.ttf")?.async("uint8array") ?? new Uint8Array()
      const decoder = new TextDecoder()
      const decoded = decoder.decode(content)

      assert.include(decoded, "OpenSans-Light")
    })
  })
})
