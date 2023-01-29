/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { LogicManagementClient } from "@azure/arm-logic";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List the workflow run action scoped repetitions.
 *
 * @summary List the workflow run action scoped repetitions.
 * x-ms-original-file: specification/logic/resource-manager/Microsoft.Logic/stable/2019-05-01/examples/WorkflowRunActionScopeRepetitions_List.json
 */
async function listTheScopedRepetitions() {
  const subscriptionId =
    process.env["LOGIC_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["LOGIC_RESOURCE_GROUP"] || "testResourceGroup";
  const workflowName = "testFlow";
  const runName = "08586776228332053161046300351";
  const actionName = "for_each";
  const credential = new DefaultAzureCredential();
  const client = new LogicManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workflowRunActionScopeRepetitions.list(
    resourceGroupName,
    workflowName,
    runName,
    actionName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listTheScopedRepetitions();
}

main().catch(console.error);
