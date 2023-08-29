/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  NetworkTapRule,
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create Network Tap Rule resource.
 *
 * @summary Create Network Tap Rule resource.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/NetworkTapRules_Create_MaximumSet_Gen.json
 */
async function networkTapRulesCreateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] ||
    "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const networkTapRuleName = "example-tapRule";
  const body: NetworkTapRule = {
    annotation: "annotation",
    configurationType: "File",
    dynamicMatchConfigurations: [
      {
        ipGroups: [
          {
            name: "example-ipGroup1",
            ipAddressType: "IPv4",
            ipPrefixes: ["10.10.10.10/30"]
          }
        ],
        portGroups: [
          { name: "example-portGroup1", ports: ["100-200"] },
          { name: "example-portGroup2", ports: ["900", "1000-2000"] }
        ],
        vlanGroups: [{ name: "exmaple-vlanGroup", vlans: ["10", "100-200"] }]
      }
    ],
    location: "eastus",
    matchConfigurations: [
      {
        actions: [
          {
            type: "Drop",
            destinationId:
              "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/neighborGroups/example-neighborGroup",
            isTimestampEnabled: "True",
            matchConfigurationName: "match1",
            truncate: "100"
          }
        ],
        ipAddressType: "IPv4",
        matchConditions: [
          {
            encapsulationType: "None",
            ipCondition: {
              type: "SourceIP",
              ipGroupNames: ["example-ipGroup"],
              ipPrefixValues: ["10.10.10.10/20"],
              prefixType: "Prefix"
            },
            portCondition: {
              layer4Protocol: "TCP",
              portGroupNames: ["example-portGroup1"],
              portType: "SourcePort",
              ports: ["100"]
            },
            protocolTypes: ["TCP"],
            vlanMatchCondition: {
              innerVlans: ["11-20"],
              vlanGroupNames: ["exmaple-vlanGroup"],
              vlans: ["10"]
            }
          }
        ],
        matchConfigurationName: "config1",
        sequenceNumber: 10
      }
    ],
    pollingIntervalInSeconds: 30,
    tags: { keyID: "keyValue" },
    tapRulesUrl: "https://microsoft.com/a"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.networkTapRules.beginCreateAndWait(
    resourceGroupName,
    networkTapRuleName,
    body
  );
  console.log(result);
}

async function main() {
  networkTapRulesCreateMaximumSetGen();
}

main().catch(console.error);
