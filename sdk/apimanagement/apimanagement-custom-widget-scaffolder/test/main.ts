const assert = require("assert")
const JSZip = require("jszip")
const {generateArchive} = require("../dist")

const TEST_CONFIG = {
  name: "contoso-app",
  displayName: "Contoso App",
}

const technologies = ["typescript", "react"]

technologies.forEach(tech => {
  describe(`Scaffolder – ${tech}`, async function() {
    let scaffold: typeof JSZip

    it("scaffolds", async function() {
      scaffold = await generateArchive({...TEST_CONFIG, tech}, {})
      const buffer = scaffold.generateAsync({type: "nodebuffer"})

      assert.ok(await JSZip.loadAsync(buffer))
    })

    it("replaces value in package.json", async function() {
      const json = JSON.parse(await scaffold.file("package.json").async("string"))

      assert.equal(json.name, TEST_CONFIG.name)
    })

    it("encodes fonts properly", async function() {
      const content = await scaffold.file("src/styles/fonts/OpenSans-Light.ttf").async("base64")

      assert.ok(Buffer.from(content, "base64").toString("utf8").includes("OpenSans-Light"))
    })
  })
})
