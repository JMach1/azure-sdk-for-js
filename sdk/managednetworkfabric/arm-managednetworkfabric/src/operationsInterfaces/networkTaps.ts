/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  NetworkTap,
  NetworkTapsListByResourceGroupOptionalParams,
  NetworkTapsListBySubscriptionOptionalParams,
  NetworkTapsCreateOptionalParams,
  NetworkTapsCreateResponse,
  NetworkTapsGetOptionalParams,
  NetworkTapsGetResponse,
  NetworkTapPatch,
  NetworkTapsUpdateOptionalParams,
  NetworkTapsUpdateResponse,
  NetworkTapsDeleteOptionalParams,
  UpdateAdministrativeState,
  NetworkTapsUpdateAdministrativeStateOptionalParams,
  NetworkTapsUpdateAdministrativeStateResponse,
  NetworkTapsResyncOptionalParams,
  NetworkTapsResyncResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetworkTaps. */
export interface NetworkTaps {
  /**
   * Displays Network Taps list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkTapsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<NetworkTap>;
  /**
   * Displays Network Taps list by subscription GET method.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: NetworkTapsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<NetworkTap>;
  /**
   * Creates a Network Tap.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapName Name of the Network Tap.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    networkTapName: string,
    body: NetworkTap,
    options?: NetworkTapsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapsCreateResponse>,
      NetworkTapsCreateResponse
    >
  >;
  /**
   * Creates a Network Tap.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapName Name of the Network Tap.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    networkTapName: string,
    body: NetworkTap,
    options?: NetworkTapsCreateOptionalParams
  ): Promise<NetworkTapsCreateResponse>;
  /**
   * Retrieves details of this Network Tap.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapName Name of the Network Tap.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkTapName: string,
    options?: NetworkTapsGetOptionalParams
  ): Promise<NetworkTapsGetResponse>;
  /**
   * API to update certain properties of the Network Tap resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapName Name of the Network Tap.
   * @param body Network Tap properties to update.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    networkTapName: string,
    body: NetworkTapPatch,
    options?: NetworkTapsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapsUpdateResponse>,
      NetworkTapsUpdateResponse
    >
  >;
  /**
   * API to update certain properties of the Network Tap resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapName Name of the Network Tap.
   * @param body Network Tap properties to update.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    networkTapName: string,
    body: NetworkTapPatch,
    options?: NetworkTapsUpdateOptionalParams
  ): Promise<NetworkTapsUpdateResponse>;
  /**
   * Deletes Network Tap.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapName Name of the Network Tap.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    networkTapName: string,
    options?: NetworkTapsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes Network Tap.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapName Name of the Network Tap.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    networkTapName: string,
    options?: NetworkTapsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapName Name of the Network Tap.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginUpdateAdministrativeState(
    resourceGroupName: string,
    networkTapName: string,
    body: UpdateAdministrativeState,
    options?: NetworkTapsUpdateAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapsUpdateAdministrativeStateResponse>,
      NetworkTapsUpdateAdministrativeStateResponse
    >
  >;
  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapName Name of the Network Tap.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginUpdateAdministrativeStateAndWait(
    resourceGroupName: string,
    networkTapName: string,
    body: UpdateAdministrativeState,
    options?: NetworkTapsUpdateAdministrativeStateOptionalParams
  ): Promise<NetworkTapsUpdateAdministrativeStateResponse>;
  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapName Name of the Network Tap.
   * @param options The options parameters.
   */
  beginResync(
    resourceGroupName: string,
    networkTapName: string,
    options?: NetworkTapsResyncOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapsResyncResponse>,
      NetworkTapsResyncResponse
    >
  >;
  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapName Name of the Network Tap.
   * @param options The options parameters.
   */
  beginResyncAndWait(
    resourceGroupName: string,
    networkTapName: string,
    options?: NetworkTapsResyncOptionalParams
  ): Promise<NetworkTapsResyncResponse>;
}
