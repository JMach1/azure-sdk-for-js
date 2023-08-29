/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns list of access infos - for Git and Management endpoints.
 *
 * @summary Returns list of access infos - for Git and Management endpoints.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementListTenantAccess.json
 */
async function apiManagementListTenantAccess() {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.tenantAccess.listByService(
    resourceGroupName,
    serviceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  apiManagementListTenantAccess();
}

main().catch(console.error);
