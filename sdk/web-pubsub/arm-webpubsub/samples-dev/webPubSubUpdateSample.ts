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
  WebPubSubResource,
  WebPubSubManagementClient
} from "@azure/arm-webpubsub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Operation to update an exiting resource.
 *
 * @summary Operation to update an exiting resource.
 * x-ms-original-file: specification/webpubsub/resource-manager/Microsoft.SignalRService/preview/2023-06-01-preview/examples/WebPubSub_Update.json
 */
async function webPubSubUpdate() {
  const subscriptionId =
    process.env["WEB-PUBSUB_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["WEB-PUBSUB_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "myWebPubSubService";
  const parameters: WebPubSubResource = {
    disableAadAuth: false,
    disableLocalAuth: false,
    identity: { type: "SystemAssigned" },
    kind: "WebPubSub",
    liveTraceConfiguration: {
      categories: [{ name: "ConnectivityLogs", enabled: "true" }],
      enabled: "false"
    },
    location: "eastus",
    networkACLs: {
      defaultAction: "Deny",
      privateEndpoints: [
        {
          name: "mywebpubsubservice.1fa229cd-bf3f-47f0-8c49-afb36723997e",
          allow: ["ServerConnection"]
        }
      ],
      publicNetwork: { allow: ["ClientConnection"] }
    },
    publicNetworkAccess: "Enabled",
    sku: { name: "Premium_P1", capacity: 1, tier: "Premium" },
    tags: { key1: "value1" },
    tls: { clientCertEnabled: false }
  };
  const credential = new DefaultAzureCredential();
  const client = new WebPubSubManagementClient(credential, subscriptionId);
  const result = await client.webPubSub.beginUpdateAndWait(
    resourceGroupName,
    resourceName,
    parameters
  );
  console.log(result);
}

async function main() {
  webPubSubUpdate();
}

main().catch(console.error);
