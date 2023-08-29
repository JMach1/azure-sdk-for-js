/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { StorageManagementClient } = require("@azure/arm-storage");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deletes the managementpolicy associated with the specified storage account.
 *
 * @summary Deletes the managementpolicy associated with the specified storage account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-01-01/examples/StorageAccountDeleteManagementPolicy.json
 */
async function storageAccountDeleteManagementPolicies() {
  const subscriptionId = process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res6977";
  const accountName = "sto2527";
  const managementPolicyName = "default";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.managementPolicies.delete(
    resourceGroupName,
    accountName,
    managementPolicyName
  );
  console.log(result);
}

async function main() {
  storageAccountDeleteManagementPolicies();
}

main().catch(console.error);
