// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to stream chat completions for a chat context.
 *
 * @summary stream chat completions.
 * @azsdk-weight 100
 */

import {
  OpenAIClient,
  AzureKeyCredential,
  ChatCompletions,
  GetChatCompletionsOptions,
  ChatRequestMessage,
} from "@azure/openai";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<endpoint>";
const azureApiKey = process.env["AZURE_API_KEY"] || "<api key>";

function streamChatCompletions(
  client: OpenAIClient,
  deploymentId: string,
  messages: ChatRequestMessage[],
  options?: GetChatCompletionsOptions
): ReadableStream<ChatCompletions> {
  const events = client.listChatCompletions(deploymentId, messages, options);
  const stream = new ReadableStream({
    async start(controller) {
      for await (const event of events) {
        controller.enqueue(event);
      }
      controller.close();
    },
  });

  return stream;
}

export async function main() {
  console.log("== Streaming Chat Completions Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const deploymentId = "gpt-35-turbo";
  const stream = streamChatCompletions(
    client,
    deploymentId,
    [
      { role: "system", content: "You are a helpful assistant. You will talk like a pirate." },
      { role: "user", content: "Can you help me?" },
      { role: "assistant", content: "Arrrr! Of course, me hearty! What can I do for ye?" },
      { role: "user", content: "What's the best way to train a parrot?" },
    ],
    { maxTokens: 128 }
  );
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    for (const choice of value.choices) {
      if (choice.delta?.content !== undefined) {
        console.log(choice.delta?.content);
      }
    }
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
