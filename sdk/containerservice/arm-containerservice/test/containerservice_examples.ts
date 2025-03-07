/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { ContainerServiceClient } from "../src/containerServiceClient";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "88888888-8888-8888-8888-888888888888"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("ContainerService test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let clientId: string;
  let secret: string;
  let client: ContainerServiceClient;
  let location: string;
  let resourceGroupName: string;
  let resourceName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    clientId = env.AZURE_CLIENT_ID || '';
    secret = env.AZURE_CLIENT_SECRET || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new ContainerServiceClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroupName = "myjstest";
    resourceName = "myreourcexyz";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("managedClusters create test", async function () {
    const res = await client.managedClusters.beginCreateOrUpdateAndWait(resourceGroupName, resourceName, {
      dnsPrefix: "aksjssdk",
      agentPoolProfiles: [
        {
          name: "aksagent",
          count: 1,
          vmSize: "Standard_DS2_v2",
          maxPods: 110,
          minCount: 1,
          maxCount: 100,
          osType: "Linux",
          type: "VirtualMachineScaleSets",
          enableAutoScaling: true,
          mode: "System"
        }
      ],
      servicePrincipalProfile: {
        clientId: clientId,
        secret: secret
      },
      location: location
    }, testPollingOptions);
    assert.equal(res.name, resourceName);
  });

  it("agentPools create test", async function () {
    const res = await client.agentPools.beginCreateOrUpdateAndWait(
      resourceGroupName,
      resourceName,
      "aksagent1",
      {
        count: 3,
        mode: "User",
        orchestratorVersion: "",
        osDiskSizeGB: 64,
        osType: "Linux",
        vmSize: "Standard_DS2_v2",
        workloadRuntime: "OCIContainer"
      }
    );
    assert.equal(res.name, "aksagent1");
  });

  it("managedClusters get test", async function () {
    const res = await client.managedClusters.get(resourceGroupName, resourceName);
    assert.equal(res.name, resourceName);
  });

  it("managedClusters getUpgradeProfile test", async function () {
    const res = await client.managedClusters.getUpgradeProfile(resourceGroupName, resourceName);
    assert.equal(res.name, "default");
  });

  it("managedClusters list test", async function () {
    const resArray = new Array();
    for await (let item of client.managedClusters.listByResourceGroup(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("agentPools list test", async function () {
    const resArray = new Array();
    for await (let item of client.agentPools.list(
      resourceGroupName,
      resourceName
    )) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 2);
  });

  it("managedClusters update test", async function () {
    const res = await client.managedClusters.beginUpdateTagsAndWait(resourceGroupName, resourceName, { tags: { tier: "testing", archv3: "" } }, testPollingOptions);
    assert.equal(res.type, "Microsoft.ContainerService/ManagedClusters");
  });

  it("managedClusters delete test", async function () {
    const res = await client.managedClusters.beginDeleteAndWait(resourceGroupName, resourceName, testPollingOptions);
    const resArray = new Array();
    for await (let item of client.managedClusters.listByResourceGroup(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
