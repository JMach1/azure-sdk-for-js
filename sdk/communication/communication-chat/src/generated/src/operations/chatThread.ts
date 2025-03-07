/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { ChatThread } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ChatApiClient } from "../chatApiClient";
import {
  ChatThreadListChatReadReceiptsOptionalParams,
  ChatThreadListChatReadReceiptsResponse,
  SendReadReceiptRequest,
  ChatThreadSendChatReadReceiptOptionalParams,
  SendChatMessageRequest,
  ChatThreadSendChatMessageOptionalParams,
  ChatThreadSendChatMessageResponse,
  ChatThreadListChatMessagesOptionalParams,
  ChatThreadListChatMessagesResponse,
  ChatThreadGetChatMessageOptionalParams,
  ChatThreadGetChatMessageResponse,
  UpdateChatMessageRequest,
  ChatThreadUpdateChatMessageOptionalParams,
  ChatThreadDeleteChatMessageOptionalParams,
  ChatThreadListChatParticipantsOptionalParams,
  ChatThreadListChatParticipantsResponse,
  CommunicationIdentifierModel,
  ChatThreadRemoveChatParticipantOptionalParams,
  AddChatParticipantsRequest,
  ChatThreadAddChatParticipantsOptionalParams,
  ChatThreadAddChatParticipantsResponse,
  UpdateChatThreadRequest,
  ChatThreadUpdateChatThreadPropertiesOptionalParams,
  ChatThreadGetChatThreadPropertiesOptionalParams,
  ChatThreadGetChatThreadPropertiesResponse,
  ChatThreadSendTypingNotificationOptionalParams,
  ChatThreadListChatReadReceiptsNextOptionalParams,
  ChatThreadListChatReadReceiptsNextResponse,
  ChatThreadListChatMessagesNextOptionalParams,
  ChatThreadListChatMessagesNextResponse,
  ChatThreadListChatParticipantsNextOptionalParams,
  ChatThreadListChatParticipantsNextResponse
} from "../models";

/** Class containing ChatThread operations. */
export class ChatThreadImpl implements ChatThread {
  private readonly client: ChatApiClient;

  /**
   * Initialize a new instance of the class ChatThread class.
   * @param client Reference to the service client
   */
  constructor(client: ChatApiClient) {
    this.client = client;
  }

  /**
   * Gets chat message read receipts for a thread.
   * @param chatThreadId Thread id to get the chat message read receipts for.
   * @param options The options parameters.
   */
  async listChatReadReceipts(
    chatThreadId: string,
    options?: ChatThreadListChatReadReceiptsOptionalParams
  ): Promise<ChatThreadListChatReadReceiptsResponse> {
    return tracingClient.withSpan(
      "ChatApiClient.listChatReadReceipts",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, options },
          listChatReadReceiptsOperationSpec
        ) as Promise<ChatThreadListChatReadReceiptsResponse>;
      }
    );
  }

  /**
   * Sends a read receipt event to a thread, on behalf of a user.
   * @param chatThreadId Thread id to send the read receipt event to.
   * @param sendReadReceiptRequest Read receipt details.
   * @param options The options parameters.
   */
  async sendChatReadReceipt(
    chatThreadId: string,
    sendReadReceiptRequest: SendReadReceiptRequest,
    options?: ChatThreadSendChatReadReceiptOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "ChatApiClient.sendChatReadReceipt",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, sendReadReceiptRequest, options },
          sendChatReadReceiptOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Sends a message to a thread.
   * @param chatThreadId The thread id to send the message to.
   * @param sendChatMessageRequest Details of the message to send.
   * @param options The options parameters.
   */
  async sendChatMessage(
    chatThreadId: string,
    sendChatMessageRequest: SendChatMessageRequest,
    options?: ChatThreadSendChatMessageOptionalParams
  ): Promise<ChatThreadSendChatMessageResponse> {
    return tracingClient.withSpan(
      "ChatApiClient.sendChatMessage",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, sendChatMessageRequest, options },
          sendChatMessageOperationSpec
        ) as Promise<ChatThreadSendChatMessageResponse>;
      }
    );
  }

  /**
   * Gets a list of messages from a thread.
   * @param chatThreadId The thread id of the message.
   * @param options The options parameters.
   */
  async listChatMessages(
    chatThreadId: string,
    options?: ChatThreadListChatMessagesOptionalParams
  ): Promise<ChatThreadListChatMessagesResponse> {
    return tracingClient.withSpan(
      "ChatApiClient.listChatMessages",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, options },
          listChatMessagesOperationSpec
        ) as Promise<ChatThreadListChatMessagesResponse>;
      }
    );
  }

  /**
   * Gets a message by id.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param options The options parameters.
   */
  async getChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    options?: ChatThreadGetChatMessageOptionalParams
  ): Promise<ChatThreadGetChatMessageResponse> {
    return tracingClient.withSpan(
      "ChatApiClient.getChatMessage",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, chatMessageId, options },
          getChatMessageOperationSpec
        ) as Promise<ChatThreadGetChatMessageResponse>;
      }
    );
  }

  /**
   * Updates a message.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param updateChatMessageRequest Details of the request to update the message.
   * @param options The options parameters.
   */
  async updateChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    updateChatMessageRequest: UpdateChatMessageRequest,
    options?: ChatThreadUpdateChatMessageOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "ChatApiClient.updateChatMessage",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, chatMessageId, updateChatMessageRequest, options },
          updateChatMessageOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Deletes a message.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param options The options parameters.
   */
  async deleteChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    options?: ChatThreadDeleteChatMessageOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "ChatApiClient.deleteChatMessage",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, chatMessageId, options },
          deleteChatMessageOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Gets the participants of a thread.
   * @param chatThreadId Thread id to get participants for.
   * @param options The options parameters.
   */
  async listChatParticipants(
    chatThreadId: string,
    options?: ChatThreadListChatParticipantsOptionalParams
  ): Promise<ChatThreadListChatParticipantsResponse> {
    return tracingClient.withSpan(
      "ChatApiClient.listChatParticipants",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, options },
          listChatParticipantsOperationSpec
        ) as Promise<ChatThreadListChatParticipantsResponse>;
      }
    );
  }

  /**
   * Remove a participant from a thread.
   * @param chatThreadId Thread id to remove the participant from.
   * @param participantCommunicationIdentifier Id of the thread participant to remove from the thread.
   * @param options The options parameters.
   */
  async removeChatParticipant(
    chatThreadId: string,
    participantCommunicationIdentifier: CommunicationIdentifierModel,
    options?: ChatThreadRemoveChatParticipantOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "ChatApiClient.removeChatParticipant",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, participantCommunicationIdentifier, options },
          removeChatParticipantOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Adds thread participants to a thread. If participants already exist, no change occurs.
   * @param chatThreadId Id of the thread to add participants to.
   * @param addChatParticipantsRequest Thread participants to be added to the thread.
   * @param options The options parameters.
   */
  async addChatParticipants(
    chatThreadId: string,
    addChatParticipantsRequest: AddChatParticipantsRequest,
    options?: ChatThreadAddChatParticipantsOptionalParams
  ): Promise<ChatThreadAddChatParticipantsResponse> {
    return tracingClient.withSpan(
      "ChatApiClient.addChatParticipants",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, addChatParticipantsRequest, options },
          addChatParticipantsOperationSpec
        ) as Promise<ChatThreadAddChatParticipantsResponse>;
      }
    );
  }

  /**
   * Updates a thread's properties.
   * @param chatThreadId The id of the thread to update.
   * @param updateChatThreadRequest Request payload for updating a chat thread.
   * @param options The options parameters.
   */
  async updateChatThreadProperties(
    chatThreadId: string,
    updateChatThreadRequest: UpdateChatThreadRequest,
    options?: ChatThreadUpdateChatThreadPropertiesOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "ChatApiClient.updateChatThreadProperties",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, updateChatThreadRequest, options },
          updateChatThreadPropertiesOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Gets a chat thread's properties.
   * @param chatThreadId Id of the thread.
   * @param options The options parameters.
   */
  async getChatThreadProperties(
    chatThreadId: string,
    options?: ChatThreadGetChatThreadPropertiesOptionalParams
  ): Promise<ChatThreadGetChatThreadPropertiesResponse> {
    return tracingClient.withSpan(
      "ChatApiClient.getChatThreadProperties",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, options },
          getChatThreadPropertiesOperationSpec
        ) as Promise<ChatThreadGetChatThreadPropertiesResponse>;
      }
    );
  }

  /**
   * Posts a typing event to a thread, on behalf of a user.
   * @param chatThreadId Id of the thread.
   * @param options The options parameters.
   */
  async sendTypingNotification(
    chatThreadId: string,
    options?: ChatThreadSendTypingNotificationOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "ChatApiClient.sendTypingNotification",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, options },
          sendTypingNotificationOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * ListChatReadReceiptsNext
   * @param chatThreadId Thread id to get the chat message read receipts for.
   * @param nextLink The nextLink from the previous successful call to the ListChatReadReceipts method.
   * @param options The options parameters.
   */
  async listChatReadReceiptsNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatReadReceiptsNextOptionalParams
  ): Promise<ChatThreadListChatReadReceiptsNextResponse> {
    return tracingClient.withSpan(
      "ChatApiClient.listChatReadReceiptsNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, nextLink, options },
          listChatReadReceiptsNextOperationSpec
        ) as Promise<ChatThreadListChatReadReceiptsNextResponse>;
      }
    );
  }

  /**
   * ListChatMessagesNext
   * @param chatThreadId The thread id of the message.
   * @param nextLink The nextLink from the previous successful call to the ListChatMessages method.
   * @param options The options parameters.
   */
  async listChatMessagesNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatMessagesNextOptionalParams
  ): Promise<ChatThreadListChatMessagesNextResponse> {
    return tracingClient.withSpan(
      "ChatApiClient.listChatMessagesNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, nextLink, options },
          listChatMessagesNextOperationSpec
        ) as Promise<ChatThreadListChatMessagesNextResponse>;
      }
    );
  }

  /**
   * ListChatParticipantsNext
   * @param chatThreadId Thread id to get participants for.
   * @param nextLink The nextLink from the previous successful call to the ListChatParticipants method.
   * @param options The options parameters.
   */
  async listChatParticipantsNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatParticipantsNextOptionalParams
  ): Promise<ChatThreadListChatParticipantsNextResponse> {
    return tracingClient.withSpan(
      "ChatApiClient.listChatParticipantsNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { chatThreadId, nextLink, options },
          listChatParticipantsNextOperationSpec
        ) as Promise<ChatThreadListChatParticipantsNextResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listChatReadReceiptsOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/readReceipts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessageReadReceiptsCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [
    Parameters.maxPageSize,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept],
  serializer
};
const sendChatReadReceiptOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/readReceipts",
  httpMethod: "POST",
  responses: {
    200: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.sendReadReceiptRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const sendChatMessageOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.SendChatMessageResult
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.sendChatMessageRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listChatMessagesOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessagesCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [
    Parameters.maxPageSize,
    Parameters.apiVersion,
    Parameters.startTime
  ],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept],
  serializer
};
const getChatMessageOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages/{chatMessageId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessage
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.chatThreadId,
    Parameters.chatMessageId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateChatMessageOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages/{chatMessageId}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.updateChatMessageRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.chatThreadId,
    Parameters.chatMessageId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteChatMessageOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages/{chatMessageId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.chatThreadId,
    Parameters.chatMessageId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listChatParticipantsOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/participants",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatParticipantsCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [
    Parameters.maxPageSize,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept],
  serializer
};
const removeChatParticipantOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/participants/:remove",
  httpMethod: "POST",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.participantCommunicationIdentifier,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const addChatParticipantsOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/participants/:add",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.AddChatParticipantsResult
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.addChatParticipantsRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateChatThreadPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.updateChatThreadRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getChatThreadPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatThreadProperties
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept],
  serializer
};
const sendTypingNotificationOperationSpec: coreClient.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/typing",
  httpMethod: "POST",
  responses: {
    200: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.sendTypingNotificationRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listChatReadReceiptsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessageReadReceiptsCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.chatThreadId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listChatMessagesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessagesCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.chatThreadId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listChatParticipantsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatParticipantsCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.chatThreadId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
