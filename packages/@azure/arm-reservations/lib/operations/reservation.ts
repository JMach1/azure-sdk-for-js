/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/reservationMappers";
import * as Parameters from "../models/parameters";
import { AzureReservationAPIContext } from "../azureReservationAPIContext";

/** Class representing a Reservation. */
export class Reservation {
  private readonly client: AzureReservationAPIContext;

  /**
   * Create a Reservation.
   * @param {AzureReservationAPIContext} client Reference to the service client.
   */
  constructor(client: AzureReservationAPIContext) {
    this.client = client;
  }

  /**
   * Split a `Reservation` into two `Reservation`s with specified quantity distribution.
   * @summary Split the `Reservation`.
   * @param reservationOrderId Order Id of the reservation
   * @param body Information needed to Split a reservation item
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationSplitResponse>
   */
  split(reservationOrderId: string, body: Models.SplitRequest, options?: msRest.RequestOptionsBase): Promise<Models.ReservationSplitResponse> {
    return this.beginSplit(reservationOrderId,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReservationSplitResponse>;
  }

  /**
   * Merge the specified `Reservation`s into a new `Reservation`. The two `Reservation`s being merged
   * must have same properties.
   * @summary Merges two `Reservation`s.
   * @param reservationOrderId Order Id of the reservation
   * @param body Information needed for commercial request for a reservation
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationMergeResponse>
   */
  merge(reservationOrderId: string, body: Models.MergeRequest, options?: msRest.RequestOptionsBase): Promise<Models.ReservationMergeResponse> {
    return this.beginMerge(reservationOrderId,body,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReservationMergeResponse>;
  }

  /**
   * List `Reservation`s within a single `ReservationOrder`.
   * @summary Get `Reservation`s in a given reservation Order
   * @param reservationOrderId Order Id of the reservation
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationListResponse>
   */
  list(reservationOrderId: string, options?: msRest.RequestOptionsBase): Promise<Models.ReservationListResponse>;
  /**
   * @param reservationOrderId Order Id of the reservation
   * @param callback The callback
   */
  list(reservationOrderId: string, callback: msRest.ServiceCallback<Models.ReservationList>): void;
  /**
   * @param reservationOrderId Order Id of the reservation
   * @param options The optional parameters
   * @param callback The callback
   */
  list(reservationOrderId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationList>): void;
  list(reservationOrderId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ReservationList>): Promise<Models.ReservationListResponse> {
    return this.client.sendOperationRequest(
      {
        reservationOrderId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ReservationListResponse>;
  }

  /**
   * Get specific `Reservation` details.
   * @summary Get `Reservation` details.
   * @param reservationId Id of the Reservation Item
   * @param reservationOrderId Order Id of the reservation
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationGetResponse>
   */
  get(reservationId: string, reservationOrderId: string, options?: msRest.RequestOptionsBase): Promise<Models.ReservationGetResponse>;
  /**
   * @param reservationId Id of the Reservation Item
   * @param reservationOrderId Order Id of the reservation
   * @param callback The callback
   */
  get(reservationId: string, reservationOrderId: string, callback: msRest.ServiceCallback<Models.ReservationResponse>): void;
  /**
   * @param reservationId Id of the Reservation Item
   * @param reservationOrderId Order Id of the reservation
   * @param options The optional parameters
   * @param callback The callback
   */
  get(reservationId: string, reservationOrderId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationResponse>): void;
  get(reservationId: string, reservationOrderId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ReservationResponse>): Promise<Models.ReservationGetResponse> {
    return this.client.sendOperationRequest(
      {
        reservationId,
        reservationOrderId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ReservationGetResponse>;
  }

  /**
   * Updates the applied scopes of the `Reservation`.
   * @summary Updates a `Reservation`.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the Reservation Item
   * @param parameters Information needed to patch a reservation item
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationUpdateResponse>
   */
  update(reservationOrderId: string, reservationId: string, parameters: Models.Patch, options?: msRest.RequestOptionsBase): Promise<Models.ReservationUpdateResponse> {
    return this.beginUpdate(reservationOrderId,reservationId,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReservationUpdateResponse>;
  }

  /**
   * List of all the revisions for the `Reservation`.
   * @summary Get `Reservation` revisions.
   * @param reservationId Id of the Reservation Item
   * @param reservationOrderId Order Id of the reservation
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationListRevisionsResponse>
   */
  listRevisions(reservationId: string, reservationOrderId: string, options?: msRest.RequestOptionsBase): Promise<Models.ReservationListRevisionsResponse>;
  /**
   * @param reservationId Id of the Reservation Item
   * @param reservationOrderId Order Id of the reservation
   * @param callback The callback
   */
  listRevisions(reservationId: string, reservationOrderId: string, callback: msRest.ServiceCallback<Models.ReservationList>): void;
  /**
   * @param reservationId Id of the Reservation Item
   * @param reservationOrderId Order Id of the reservation
   * @param options The optional parameters
   * @param callback The callback
   */
  listRevisions(reservationId: string, reservationOrderId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationList>): void;
  listRevisions(reservationId: string, reservationOrderId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ReservationList>): Promise<Models.ReservationListRevisionsResponse> {
    return this.client.sendOperationRequest(
      {
        reservationId,
        reservationOrderId,
        options
      },
      listRevisionsOperationSpec,
      callback) as Promise<Models.ReservationListRevisionsResponse>;
  }

  /**
   * Split a `Reservation` into two `Reservation`s with specified quantity distribution.
   * @summary Split the `Reservation`.
   * @param reservationOrderId Order Id of the reservation
   * @param body Information needed to Split a reservation item
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginSplit(reservationOrderId: string, body: Models.SplitRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        reservationOrderId,
        body,
        options
      },
      beginSplitOperationSpec,
      options);
  }

  /**
   * Merge the specified `Reservation`s into a new `Reservation`. The two `Reservation`s being merged
   * must have same properties.
   * @summary Merges two `Reservation`s.
   * @param reservationOrderId Order Id of the reservation
   * @param body Information needed for commercial request for a reservation
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginMerge(reservationOrderId: string, body: Models.MergeRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        reservationOrderId,
        body,
        options
      },
      beginMergeOperationSpec,
      options);
  }

  /**
   * Updates the applied scopes of the `Reservation`.
   * @summary Updates a `Reservation`.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the Reservation Item
   * @param parameters Information needed to patch a reservation item
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(reservationOrderId: string, reservationId: string, parameters: Models.Patch, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        reservationOrderId,
        reservationId,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * List `Reservation`s within a single `ReservationOrder`.
   * @summary Get `Reservation`s in a given reservation Order
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReservationListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ReservationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ReservationList>): Promise<Models.ReservationListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ReservationListNextResponse>;
  }

  /**
   * List of all the revisions for the `Reservation`.
   * @summary Get `Reservation` revisions.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReservationListRevisionsNextResponse>
   */
  listRevisionsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReservationListRevisionsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listRevisionsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ReservationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listRevisionsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReservationList>): void;
  listRevisionsNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ReservationList>): Promise<Models.ReservationListRevisionsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listRevisionsNextOperationSpec,
      callback) as Promise<Models.ReservationListRevisionsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations",
  urlParameters: [
    Parameters.reservationOrderId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReservationList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}",
  urlParameters: [
    Parameters.reservationId,
    Parameters.reservationOrderId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReservationResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listRevisionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}/revisions",
  urlParameters: [
    Parameters.reservationId,
    Parameters.reservationOrderId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReservationList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginSplitOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/split",
  urlParameters: [
    Parameters.reservationOrderId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.SplitRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReservationResponse"
            }
          }
        }
      }
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginMergeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/merge",
  urlParameters: [
    Parameters.reservationOrderId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.MergeRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReservationResponse"
            }
          }
        }
      }
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}",
  urlParameters: [
    Parameters.reservationOrderId,
    Parameters.reservationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Patch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ReservationResponse
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReservationList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listRevisionsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReservationList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
