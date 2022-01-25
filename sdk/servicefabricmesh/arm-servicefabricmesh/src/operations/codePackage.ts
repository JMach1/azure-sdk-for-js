/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CodePackage } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ServiceFabricMeshManagementClient } from "../serviceFabricMeshManagementClient";
import {
  CodePackageGetContainerLogsOptionalParams,
  CodePackageGetContainerLogsResponse
} from "../models";

/** Class containing CodePackage operations. */
export class CodePackageImpl implements CodePackage {
  private readonly client: ServiceFabricMeshManagementClient;

  /**
   * Initialize a new instance of the class CodePackage class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceFabricMeshManagementClient) {
    this.client = client;
  }

  /**
   * Gets the logs for the container of the specified code package of the service replica.
   * @param resourceGroupName Azure resource group name
   * @param applicationResourceName The identity of the application.
   * @param serviceResourceName The identity of the service.
   * @param replicaName Service Fabric replica name.
   * @param codePackageName The name of code package of the service.
   * @param options The options parameters.
   */
  getContainerLogs(
    resourceGroupName: string,
    applicationResourceName: string,
    serviceResourceName: string,
    replicaName: string,
    codePackageName: string,
    options?: CodePackageGetContainerLogsOptionalParams
  ): Promise<CodePackageGetContainerLogsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationResourceName,
        serviceResourceName,
        replicaName,
        codePackageName,
        options
      },
      getContainerLogsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getContainerLogsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/applications/{applicationResourceName}/services/{serviceResourceName}/replicas/{replicaName}/codePackages/{codePackageName}/logs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerLogs
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.tail],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.applicationResourceName,
    Parameters.serviceResourceName,
    Parameters.replicaName,
    Parameters.codePackageName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
