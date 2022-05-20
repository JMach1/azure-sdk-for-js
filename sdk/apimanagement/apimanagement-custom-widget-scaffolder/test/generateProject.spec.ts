import {assert} from "chai"
import {promises} from "fs"
import sinon from "sinon"
import {displayNameToName, generateProject} from "../src"
import {TScaffoldTech, TWidgetConfig} from "../src/scaffolding"

const widgetConfig: Omit<TWidgetConfig, "tech"> = {
  displayName: "Contoso App",
}
const deployConfig = {
  apiVersion: "1",
  managementApiEndpoint: "foo.com",
  resourceGroupName: "fooRG",
  serviceName: "fooService",
  subscriptionId: "1234",
}
const technologies: TScaffoldTech[] = ["typescript", "react"]

technologies.forEach(tech => {
  describe("Custom widget scaffolder - " + tech, () => {
    let sandbox: sinon.SinonSandbox
    let writeFileSpy: sinon.SinonStub
    let writtenFiles: {name: string; content: string}[] = []

    beforeEach(() => {
      sandbox = sinon.createSandbox()
      writeFileSpy = sandbox.stub(promises, "writeFile")
      sandbox.stub(promises, "mkdir")
    })

    afterEach(() => {
      sandbox.restore()
    })

    it("should generate project", async () => {
      writeFileSpy.callsFake((name, content) => {
        writtenFiles.push({name, content})
      })
      await generateProject({...widgetConfig, tech}, deployConfig)

      assert.ok(writtenFiles.length)
    })

    it("Generated project should contain provided name", () => {
      assert.include(writtenFiles.find(file => file.name.includes("index.html"))?.content, widgetConfig.displayName)
      assert.include(
        writtenFiles.find(file => file.name.includes("package.json"))?.content,
        displayNameToName(widgetConfig.displayName)
      )
    })

    it("Generated project should contain provided deployConfig", () => {
      Object.entries(deployConfig).forEach(([key, value]) => {
        assert.include(writtenFiles.find(file => file.name.includes("deploy.js"))?.content, `"${key}": "${value}"`)
      })
    })
  })
})
