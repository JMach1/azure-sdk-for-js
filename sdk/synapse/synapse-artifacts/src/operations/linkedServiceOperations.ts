/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { LinkedServiceOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  LinkedServiceResource,
  LinkedServiceGetLinkedServicesByWorkspaceNextOptionalParams,
  LinkedServiceGetLinkedServicesByWorkspaceOptionalParams,
  LinkedServiceGetLinkedServicesByWorkspaceResponse,
  LinkedServiceCreateOrUpdateLinkedServiceOptionalParams,
  LinkedServiceCreateOrUpdateLinkedServiceResponse,
  LinkedServiceGetLinkedServiceOptionalParams,
  LinkedServiceGetLinkedServiceResponse,
  LinkedServiceDeleteLinkedServiceOptionalParams,
  ArtifactRenameRequest,
  LinkedServiceRenameLinkedServiceOptionalParams,
  LinkedServiceGetLinkedServicesByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LinkedServiceOperations operations. */
export class LinkedServiceOperationsImpl implements LinkedServiceOperations {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class LinkedServiceOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Lists linked services.
   * @param options The options parameters.
   */
  public listLinkedServicesByWorkspace(
    options?: LinkedServiceGetLinkedServicesByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<LinkedServiceResource> {
    const iter = this.getLinkedServicesByWorkspacePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getLinkedServicesByWorkspacePagingPage(options);
      }
    };
  }

  private async *getLinkedServicesByWorkspacePagingPage(
    options?: LinkedServiceGetLinkedServicesByWorkspaceOptionalParams
  ): AsyncIterableIterator<LinkedServiceResource[]> {
    let result = await this._getLinkedServicesByWorkspace(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getLinkedServicesByWorkspaceNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getLinkedServicesByWorkspacePagingAll(
    options?: LinkedServiceGetLinkedServicesByWorkspaceOptionalParams
  ): AsyncIterableIterator<LinkedServiceResource> {
    for await (const page of this.getLinkedServicesByWorkspacePagingPage(
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists linked services.
   * @param options The options parameters.
   */
  private async _getLinkedServicesByWorkspace(
    options?: LinkedServiceGetLinkedServicesByWorkspaceOptionalParams
  ): Promise<LinkedServiceGetLinkedServicesByWorkspaceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getLinkedServicesByWorkspace",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        getLinkedServicesByWorkspaceOperationSpec
      );
      return result as LinkedServiceGetLinkedServicesByWorkspaceResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Creates or updates a linked service.
   * @param linkedServiceName The linked service name.
   * @param linkedService Linked service resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateLinkedService(
    linkedServiceName: string,
    linkedService: LinkedServiceResource,
    options?: LinkedServiceCreateOrUpdateLinkedServiceOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LinkedServiceCreateOrUpdateLinkedServiceResponse>,
      LinkedServiceCreateOrUpdateLinkedServiceResponse
    >
  > {
    const { span } = createSpan(
      "ArtifactsClient-beginCreateOrUpdateLinkedService",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LinkedServiceCreateOrUpdateLinkedServiceResponse> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as LinkedServiceCreateOrUpdateLinkedServiceResponse;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
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
      { linkedServiceName, linkedService, options },
      createOrUpdateLinkedServiceOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or updates a linked service.
   * @param linkedServiceName The linked service name.
   * @param linkedService Linked service resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateLinkedServiceAndWait(
    linkedServiceName: string,
    linkedService: LinkedServiceResource,
    options?: LinkedServiceCreateOrUpdateLinkedServiceOptionalParams
  ): Promise<LinkedServiceCreateOrUpdateLinkedServiceResponse> {
    const poller = await this.beginCreateOrUpdateLinkedService(
      linkedServiceName,
      linkedService,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a linked service.
   * @param linkedServiceName The linked service name.
   * @param options The options parameters.
   */
  async getLinkedService(
    linkedServiceName: string,
    options?: LinkedServiceGetLinkedServiceOptionalParams
  ): Promise<LinkedServiceGetLinkedServiceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-getLinkedService",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { linkedServiceName, options },
        getLinkedServiceOperationSpec
      );
      return result as LinkedServiceGetLinkedServiceResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Deletes a linked service.
   * @param linkedServiceName The linked service name.
   * @param options The options parameters.
   */
  async beginDeleteLinkedService(
    linkedServiceName: string,
    options?: LinkedServiceDeleteLinkedServiceOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginDeleteLinkedService",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
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
      { linkedServiceName, options },
      deleteLinkedServiceOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes a linked service.
   * @param linkedServiceName The linked service name.
   * @param options The options parameters.
   */
  async beginDeleteLinkedServiceAndWait(
    linkedServiceName: string,
    options?: LinkedServiceDeleteLinkedServiceOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteLinkedService(
      linkedServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Renames a linked service.
   * @param linkedServiceName The linked service name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenameLinkedService(
    linkedServiceName: string,
    request: ArtifactRenameRequest,
    options?: LinkedServiceRenameLinkedServiceOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginRenameLinkedService",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
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
      { linkedServiceName, request, options },
      renameLinkedServiceOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Renames a linked service.
   * @param linkedServiceName The linked service name.
   * @param request proposed new name.
   * @param options The options parameters.
   */
  async beginRenameLinkedServiceAndWait(
    linkedServiceName: string,
    request: ArtifactRenameRequest,
    options?: LinkedServiceRenameLinkedServiceOptionalParams
  ): Promise<void> {
    const poller = await this.beginRenameLinkedService(
      linkedServiceName,
      request,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * GetLinkedServicesByWorkspaceNext
   * @param nextLink The nextLink from the previous successful call to the GetLinkedServicesByWorkspace
   *                 method.
   * @param options The options parameters.
   */
  private async _getLinkedServicesByWorkspaceNext(
    nextLink: string,
    options?: LinkedServiceGetLinkedServicesByWorkspaceNextOptionalParams
  ): Promise<LinkedServiceGetLinkedServicesByWorkspaceNextResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getLinkedServicesByWorkspaceNext",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { nextLink, options },
        getLinkedServicesByWorkspaceNextOperationSpec
      );
      return result as LinkedServiceGetLinkedServicesByWorkspaceNextResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getLinkedServicesByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/linkedservices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceListResponse
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateLinkedServiceOperationSpec: coreClient.OperationSpec = {
  path: "/linkedservices/{linkedServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceResource
    },
    201: {
      bodyMapper: Mappers.LinkedServiceResource
    },
    202: {
      bodyMapper: Mappers.LinkedServiceResource
    },
    204: {
      bodyMapper: Mappers.LinkedServiceResource
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  requestBody: Parameters.linkedService,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.endpoint, Parameters.linkedServiceName],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getLinkedServiceOperationSpec: coreClient.OperationSpec = {
  path: "/linkedservices/{linkedServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.endpoint, Parameters.linkedServiceName],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteLinkedServiceOperationSpec: coreClient.OperationSpec = {
  path: "/linkedservices/{linkedServiceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.endpoint, Parameters.linkedServiceName],
  headerParameters: [Parameters.accept],
  serializer
};
const renameLinkedServiceOperationSpec: coreClient.OperationSpec = {
  path: "/linkedservices/{linkedServiceName}/rename",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.endpoint, Parameters.linkedServiceName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getLinkedServicesByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedServiceListResponse
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
