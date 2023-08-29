/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const SearchError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchError",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchError"
            }
          }
        }
      }
    }
  }
};

export const SearchDocumentsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchDocumentsResult",
    modelProperties: {
      count: {
        serializedName: "@odata\\.count",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      coverage: {
        serializedName: "@search\\.coverage",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      facets: {
        serializedName: "@search\\.facets",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Sequence",
              element: { type: { name: "Composite", className: "FacetResult" } }
            }
          }
        }
      },
      answers: {
        serializedName: "@search\\.answers",
        readOnly: true,
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AnswerResult"
            }
          }
        }
      },
      nextPageParameters: {
        serializedName: "@search\\.nextPageParameters",
        type: {
          name: "Composite",
          className: "SearchRequest"
        }
      },
      semanticPartialResponseReason: {
        serializedName: "@search\\.semanticPartialResponseReason",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      semanticPartialResponseType: {
        serializedName: "@search\\.semanticPartialResponseType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      results: {
        serializedName: "value",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchResult"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@odata\\.nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FacetResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FacetResult",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      count: {
        serializedName: "count",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AnswerResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnswerResult",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      score: {
        serializedName: "score",
        required: true,
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      key: {
        serializedName: "key",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      },
      highlights: {
        serializedName: "highlights",
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SearchRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchRequest",
    modelProperties: {
      includeTotalResultCount: {
        serializedName: "count",
        type: {
          name: "Boolean"
        }
      },
      facets: {
        serializedName: "facets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      highlightFields: {
        serializedName: "highlight",
        type: {
          name: "String"
        }
      },
      highlightPostTag: {
        serializedName: "highlightPostTag",
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        serializedName: "highlightPreTag",
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        serializedName: "minimumCoverage",
        type: {
          name: "Number"
        }
      },
      orderBy: {
        serializedName: "orderby",
        type: {
          name: "String"
        }
      },
      queryType: {
        serializedName: "queryType",
        type: {
          name: "Enum",
          allowedValues: ["simple", "full", "semantic"]
        }
      },
      scoringStatistics: {
        serializedName: "scoringStatistics",
        type: {
          name: "Enum",
          allowedValues: ["local", "global"]
        }
      },
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      scoringParameters: {
        serializedName: "scoringParameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      scoringProfile: {
        serializedName: "scoringProfile",
        type: {
          name: "String"
        }
      },
      semanticConfiguration: {
        serializedName: "semanticConfiguration",
        type: {
          name: "String"
        }
      },
      semanticErrorHandling: {
        serializedName: "semanticErrorHandling",
        type: {
          name: "String"
        }
      },
      semanticMaxWaitInMilliseconds: {
        constraints: {
          InclusiveMinimum: 700
        },
        serializedName: "semanticMaxWaitInMilliseconds",
        nullable: true,
        type: {
          name: "Number"
        }
      },
      debug: {
        serializedName: "debug",
        type: {
          name: "String"
        }
      },
      searchText: {
        serializedName: "search",
        type: {
          name: "String"
        }
      },
      searchFields: {
        serializedName: "searchFields",
        type: {
          name: "String"
        }
      },
      searchMode: {
        serializedName: "searchMode",
        type: {
          name: "Enum",
          allowedValues: ["any", "all"]
        }
      },
      queryLanguage: {
        serializedName: "queryLanguage",
        type: {
          name: "String"
        }
      },
      speller: {
        serializedName: "speller",
        type: {
          name: "String"
        }
      },
      answers: {
        serializedName: "answers",
        type: {
          name: "String"
        }
      },
      select: {
        serializedName: "select",
        type: {
          name: "String"
        }
      },
      skip: {
        serializedName: "skip",
        type: {
          name: "Number"
        }
      },
      top: {
        serializedName: "top",
        type: {
          name: "Number"
        }
      },
      captions: {
        serializedName: "captions",
        type: {
          name: "String"
        }
      },
      semanticFields: {
        serializedName: "semanticFields",
        type: {
          name: "String"
        }
      },
      vectors: {
        serializedName: "vectors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Vector"
            }
          }
        }
      }
    }
  }
};

export const Vector: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Vector",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      kNearestNeighborsCount: {
        serializedName: "k",
        type: {
          name: "Number"
        }
      },
      fields: {
        serializedName: "fields",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SearchResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchResult",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      _score: {
        serializedName: "@search\\.score",
        required: true,
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      rerankerScore: {
        serializedName: "@search\\.rerankerScore",
        readOnly: true,
        nullable: true,
        type: {
          name: "Number"
        }
      },
      _highlights: {
        serializedName: "@search\\.highlights",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Sequence", element: { type: { name: "String" } } }
          }
        }
      },
      captions: {
        serializedName: "@search\\.captions",
        readOnly: true,
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CaptionResult"
            }
          }
        }
      },
      documentDebugInfo: {
        serializedName: "@search\\.documentDebugInfo",
        readOnly: true,
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentDebugInfo"
            }
          }
        }
      }
    }
  }
};

export const CaptionResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CaptionResult",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      text: {
        serializedName: "text",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      highlights: {
        serializedName: "highlights",
        readOnly: true,
        nullable: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DocumentDebugInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentDebugInfo",
    modelProperties: {
      semantic: {
        serializedName: "semantic",
        type: {
          name: "Composite",
          className: "SemanticDebugInfo"
        }
      }
    }
  }
};

export const SemanticDebugInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SemanticDebugInfo",
    modelProperties: {
      titleField: {
        serializedName: "titleField",
        type: {
          name: "Composite",
          className: "QueryResultDocumentSemanticField"
        }
      },
      contentFields: {
        serializedName: "contentFields",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QueryResultDocumentSemanticField"
            }
          }
        }
      },
      keywordFields: {
        serializedName: "keywordFields",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QueryResultDocumentSemanticField"
            }
          }
        }
      },
      rerankerInput: {
        serializedName: "rerankerInput",
        type: {
          name: "Composite",
          className: "QueryResultDocumentRerankerInput"
        }
      }
    }
  }
};

export const QueryResultDocumentSemanticField: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryResultDocumentSemanticField",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryResultDocumentRerankerInput: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryResultDocumentRerankerInput",
    modelProperties: {
      title: {
        serializedName: "title",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      keywords: {
        serializedName: "keywords",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SuggestDocumentsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SuggestDocumentsResult",
    modelProperties: {
      results: {
        serializedName: "value",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SuggestResult"
            }
          }
        }
      },
      coverage: {
        serializedName: "@search\\.coverage",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SuggestResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SuggestResult",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      _text: {
        serializedName: "@search\\.text",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SuggestRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SuggestRequest",
    modelProperties: {
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      useFuzzyMatching: {
        serializedName: "fuzzy",
        type: {
          name: "Boolean"
        }
      },
      highlightPostTag: {
        serializedName: "highlightPostTag",
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        serializedName: "highlightPreTag",
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        serializedName: "minimumCoverage",
        type: {
          name: "Number"
        }
      },
      orderBy: {
        serializedName: "orderby",
        type: {
          name: "String"
        }
      },
      searchText: {
        serializedName: "search",
        required: true,
        type: {
          name: "String"
        }
      },
      searchFields: {
        serializedName: "searchFields",
        type: {
          name: "String"
        }
      },
      select: {
        serializedName: "select",
        type: {
          name: "String"
        }
      },
      suggesterName: {
        serializedName: "suggesterName",
        required: true,
        type: {
          name: "String"
        }
      },
      top: {
        serializedName: "top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const IndexBatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexBatch",
    modelProperties: {
      actions: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IndexAction"
            }
          }
        }
      }
    }
  }
};

export const IndexAction: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexAction",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      __actionType: {
        serializedName: "@search\\.action",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["upload", "merge", "mergeOrUpload", "delete"]
        }
      }
    }
  }
};

export const IndexDocumentsResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexDocumentsResult",
    modelProperties: {
      results: {
        serializedName: "value",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IndexingResult"
            }
          }
        }
      }
    }
  }
};

export const IndexingResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexingResult",
    modelProperties: {
      key: {
        serializedName: "key",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      succeeded: {
        serializedName: "status",
        required: true,
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      statusCode: {
        serializedName: "statusCode",
        required: true,
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AutocompleteResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutocompleteResult",
    modelProperties: {
      coverage: {
        serializedName: "@search\\.coverage",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      results: {
        serializedName: "value",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AutocompleteItem"
            }
          }
        }
      }
    }
  }
};

export const AutocompleteItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutocompleteItem",
    modelProperties: {
      text: {
        serializedName: "text",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      },
      queryPlusText: {
        serializedName: "queryPlusText",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AutocompleteRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutocompleteRequest",
    modelProperties: {
      searchText: {
        serializedName: "search",
        required: true,
        type: {
          name: "String"
        }
      },
      autocompleteMode: {
        serializedName: "autocompleteMode",
        type: {
          name: "Enum",
          allowedValues: ["oneTerm", "twoTerms", "oneTermWithContext"]
        }
      },
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      useFuzzyMatching: {
        serializedName: "fuzzy",
        type: {
          name: "Boolean"
        }
      },
      highlightPostTag: {
        serializedName: "highlightPostTag",
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        serializedName: "highlightPreTag",
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        serializedName: "minimumCoverage",
        type: {
          name: "Number"
        }
      },
      searchFields: {
        serializedName: "searchFields",
        type: {
          name: "String"
        }
      },
      suggesterName: {
        serializedName: "suggesterName",
        required: true,
        type: {
          name: "String"
        }
      },
      top: {
        serializedName: "top",
        type: {
          name: "Number"
        }
      }
    }
  }
};
