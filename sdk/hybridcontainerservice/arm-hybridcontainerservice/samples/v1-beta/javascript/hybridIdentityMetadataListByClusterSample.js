/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HybridContainerServiceClient } = require("@azure/arm-hybridcontainerservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists the hybrid identity metadata proxy resource in a provisioned cluster instance.
 *
 * @summary Lists the hybrid identity metadata proxy resource in a provisioned cluster instance.
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2023-11-15-preview/examples/HybridIdentityMetadataListByCluster.json
 */
async function hybridIdentityMetadataListByCluster() {
  const connectedClusterResourceUri =
    "subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.Kubernetes/connectedClusters/test-hybridakscluster";
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential);
  const resArray = new Array();
  for await (let item of client.hybridIdentityMetadataOperations.listByCluster(
    connectedClusterResourceUri
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  hybridIdentityMetadataListByCluster();
}

main().catch(console.error);
