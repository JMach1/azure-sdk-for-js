/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CustomDomains } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClientContext } from "../appPlatformManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  CustomDomainResource,
  CustomDomainsListNextOptionalParams,
  CustomDomainsListOptionalParams,
  CustomDomainsGetOptionalParams,
  CustomDomainsGetResponse,
  CustomDomainsCreateOrUpdateOptionalParams,
  CustomDomainsCreateOrUpdateResponse,
  CustomDomainsDeleteOptionalParams,
  CustomDomainsUpdateOptionalParams,
  CustomDomainsUpdateResponse,
  CustomDomainsListResponse,
  CustomDomainsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CustomDomains operations. */
export class CustomDomainsImpl implements CustomDomains {
  private readonly client: AppPlatformManagementClientContext;

  /**
   * Initialize a new instance of the class CustomDomains class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClientContext) {
    this.client = client;
  }

  /**
   * List the custom domains of one lifecycle application.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    options?: CustomDomainsListOptionalParams
  ): PagedAsyncIterableIterator<CustomDomainResource> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      appName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          serviceName,
          appName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    options?: CustomDomainsListOptionalParams
  ): AsyncIterableIterator<CustomDomainResource[]> {
    let result = await this._list(
      resourceGroupName,
      serviceName,
      appName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        appName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    options?: CustomDomainsListOptionalParams
  ): AsyncIterableIterator<CustomDomainResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      appName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the custom domain of one lifecycle application.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param domainName The name of the custom domain resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    domainName: string,
    options?: CustomDomainsGetOptionalParams
  ): Promise<CustomDomainsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, appName, domainName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update custom domain of one lifecycle application.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param domainName The name of the custom domain resource.
   * @param domainResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    domainName: string,
    domainResource: CustomDomainResource,
    options?: CustomDomainsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CustomDomainsCreateOrUpdateResponse>,
      CustomDomainsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CustomDomainsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        serviceName,
        appName,
        domainName,
        domainResource,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Create or update custom domain of one lifecycle application.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param domainName The name of the custom domain resource.
   * @param domainResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    domainName: string,
    domainResource: CustomDomainResource,
    options?: CustomDomainsCreateOrUpdateOptionalParams
  ): Promise<CustomDomainsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      appName,
      domainName,
      domainResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the custom domain of one lifecycle application.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param domainName The name of the custom domain resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    domainName: string,
    options?: CustomDomainsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, serviceName, appName, domainName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Delete the custom domain of one lifecycle application.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param domainName The name of the custom domain resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    domainName: string,
    options?: CustomDomainsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serviceName,
      appName,
      domainName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update custom domain of one lifecycle application.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param domainName The name of the custom domain resource.
   * @param domainResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    domainName: string,
    domainResource: CustomDomainResource,
    options?: CustomDomainsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CustomDomainsUpdateResponse>,
      CustomDomainsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CustomDomainsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        serviceName,
        appName,
        domainName,
        domainResource,
        options
      },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Update custom domain of one lifecycle application.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param domainName The name of the custom domain resource.
   * @param domainResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    domainName: string,
    domainResource: CustomDomainResource,
    options?: CustomDomainsUpdateOptionalParams
  ): Promise<CustomDomainsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      serviceName,
      appName,
      domainName,
      domainResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List the custom domains of one lifecycle application.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    options?: CustomDomainsListOptionalParams
  ): Promise<CustomDomainsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, appName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    nextLink: string,
    options?: CustomDomainsListNextOptionalParams
  ): Promise<CustomDomainsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, appName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainResource
    },
    201: {
      bodyMapper: Mappers.CustomDomainResource
    },
    202: {
      bodyMapper: Mappers.CustomDomainResource
    },
    204: {
      bodyMapper: Mappers.CustomDomainResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.domainResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains/{domainName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainResource
    },
    201: {
      bodyMapper: Mappers.CustomDomainResource
    },
    202: {
      bodyMapper: Mappers.CustomDomainResource
    },
    204: {
      bodyMapper: Mappers.CustomDomainResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.domainResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/domains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.nextLink,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
