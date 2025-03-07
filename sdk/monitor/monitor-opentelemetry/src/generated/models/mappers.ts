/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const MonitoringDataPoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonitoringDataPoint",
    modelProperties: {
      version: {
        serializedName: "Version",
        type: {
          name: "String"
        }
      },
      invariantVersion: {
        serializedName: "InvariantVersion",
        type: {
          name: "Number"
        }
      },
      instance: {
        serializedName: "Instance",
        type: {
          name: "String"
        }
      },
      roleName: {
        serializedName: "RoleName",
        type: {
          name: "String"
        }
      },
      machineName: {
        serializedName: "MachineName",
        type: {
          name: "String"
        }
      },
      streamId: {
        serializedName: "StreamId",
        type: {
          name: "String"
        }
      },
      timestamp: {
        serializedName: "Timestamp",
        type: {
          name: "DateTime"
        }
      },
      transmissionTime: {
        serializedName: "TransmissionTime",
        type: {
          name: "DateTime"
        }
      },
      isWebApp: {
        serializedName: "IsWebApp",
        type: {
          name: "Boolean"
        }
      },
      performanceCollectionSupported: {
        serializedName: "PerformanceCollectionSupported",
        type: {
          name: "Boolean"
        }
      },
      metrics: {
        serializedName: "Metrics",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricPoint"
            }
          }
        }
      },
      documents: {
        serializedName: "Documents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentIngress"
            }
          }
        }
      },
      topCpuProcesses: {
        serializedName: "TopCpuProcesses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProcessCpuData"
            }
          }
        }
      },
      collectionConfigurationErrors: {
        serializedName: "CollectionConfigurationErrors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CollectionConfigurationError"
            }
          }
        }
      }
    }
  }
};

export const MetricPoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetricPoint",
    modelProperties: {
      name: {
        serializedName: "Name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "Value",
        type: {
          name: "Number"
        }
      },
      weight: {
        serializedName: "Weight",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentIngress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentIngress",
    modelProperties: {
      documentType: {
        serializedName: "DocumentType",
        type: {
          name: "String"
        }
      },
      documentStreamIds: {
        serializedName: "DocumentStreamIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        serializedName: "Properties",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      }
    }
  }
};

export const ProcessCpuData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProcessCpuData",
    modelProperties: {
      processName: {
        serializedName: "ProcessName",
        type: {
          name: "String"
        }
      },
      cpuPercentage: {
        serializedName: "CpuPercentage",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CollectionConfigurationError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CollectionConfigurationError",
    modelProperties: {
      collectionConfigurationErrorType: {
        serializedName: "CollectionConfigurationErrorType",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "Message",
        type: {
          name: "String"
        }
      },
      fullException: {
        serializedName: "FullException",
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "Data",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyValuePairString"
            }
          }
        }
      }
    }
  }
};

export const KeyValuePairString: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyValuePairString",
    modelProperties: {
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CollectionConfigurationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CollectionConfigurationInfo",
    modelProperties: {
      etag: {
        serializedName: "Etag",
        type: {
          name: "String"
        }
      },
      metrics: {
        serializedName: "Metrics",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DerivedMetricInfo"
            }
          }
        }
      },
      documentStreams: {
        serializedName: "DocumentStreams",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentStreamInfo"
            }
          }
        }
      },
      quotaInfo: {
        serializedName: "QuotaInfo",
        type: {
          name: "Composite",
          className: "QuotaConfigurationInfo"
        }
      }
    }
  }
};

export const DerivedMetricInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DerivedMetricInfo",
    modelProperties: {
      id: {
        serializedName: "Id",
        type: {
          name: "String"
        }
      },
      telemetryType: {
        serializedName: "TelemetryType",
        type: {
          name: "String"
        }
      },
      filterGroups: {
        serializedName: "FilterGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FilterConjunctionGroupInfo"
            }
          }
        }
      },
      projection: {
        serializedName: "Projection",
        type: {
          name: "String"
        }
      },
      aggregation: {
        serializedName: "Aggregation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FilterConjunctionGroupInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FilterConjunctionGroupInfo",
    modelProperties: {
      filters: {
        serializedName: "Filters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FilterInfo"
            }
          }
        }
      }
    }
  }
};

export const FilterInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FilterInfo",
    modelProperties: {
      fieldName: {
        serializedName: "FieldName",
        type: {
          name: "String"
        }
      },
      predicate: {
        serializedName: "Predicate",
        type: {
          name: "String"
        }
      },
      comparand: {
        serializedName: "Comparand",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DocumentStreamInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentStreamInfo",
    modelProperties: {
      id: {
        serializedName: "Id",
        type: {
          name: "String"
        }
      },
      documentFilterGroups: {
        serializedName: "DocumentFilterGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentFilterConjunctionGroupInfo"
            }
          }
        }
      }
    }
  }
};

export const DocumentFilterConjunctionGroupInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentFilterConjunctionGroupInfo",
    modelProperties: {
      telemetryType: {
        serializedName: "TelemetryType",
        type: {
          name: "String"
        }
      },
      filters: {
        serializedName: "Filters",
        type: {
          name: "Composite",
          className: "FilterConjunctionGroupInfo"
        }
      }
    }
  }
};

export const QuotaConfigurationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuotaConfigurationInfo",
    modelProperties: {
      initialQuota: {
        serializedName: "InitialQuota",
        type: {
          name: "Number"
        }
      },
      maxQuota: {
        serializedName: "MaxQuota",
        required: true,
        type: {
          name: "Number"
        }
      },
      quotaAccrualRatePerSec: {
        serializedName: "QuotaAccrualRatePerSec",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ServiceError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceError",
    modelProperties: {
      requestId: {
        serializedName: "RequestId",
        type: {
          name: "String"
        }
      },
      responseDateTime: {
        serializedName: "ResponseDateTime",
        type: {
          name: "DateTime"
        }
      },
      code: {
        serializedName: "Code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "Message",
        type: {
          name: "String"
        }
      },
      exception: {
        serializedName: "Exception",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RequestDocumentIngress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RequestDocumentIngress",
    modelProperties: {
      ...DocumentIngress.type.modelProperties,
      name: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "Name",
        type: {
          name: "String"
        }
      },
      url: {
        constraints: {
          MaxLength: 2048
        },
        serializedName: "Url",
        type: {
          name: "String"
        }
      },
      responseCode: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "ResponseCode",
        type: {
          name: "String"
        }
      },
      duration: {
        serializedName: "Duration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemoteDependencyDocumentIngress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteDependencyDocumentIngress",
    modelProperties: {
      ...DocumentIngress.type.modelProperties,
      name: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "Name",
        type: {
          name: "String"
        }
      },
      commandName: {
        constraints: {
          MaxLength: 2048
        },
        serializedName: "CommandName",
        type: {
          name: "String"
        }
      },
      resultCode: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "ResultCode",
        type: {
          name: "String"
        }
      },
      duration: {
        serializedName: "Duration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExceptionDocumentIngress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExceptionDocumentIngress",
    modelProperties: {
      ...DocumentIngress.type.modelProperties,
      exceptionType: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "ExceptionType",
        type: {
          name: "String"
        }
      },
      exceptionMessage: {
        constraints: {
          MaxLength: 32768
        },
        serializedName: "ExceptionMessage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventDocumentIngress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EventDocumentIngress",
    modelProperties: {
      ...DocumentIngress.type.modelProperties,
      name: {
        constraints: {
          MaxLength: 512
        },
        serializedName: "Name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TraceDocumentIngress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TraceDocumentIngress",
    modelProperties: {
      ...DocumentIngress.type.modelProperties,
      message: {
        constraints: {
          MaxLength: 32768
        },
        serializedName: "Message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QuickpulseClientPingHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuickpulseClientPingHeaders",
    modelProperties: {
      xMsQpsSubscribed: {
        serializedName: "x-ms-qps-subscribed",
        type: {
          name: "String"
        }
      },
      xMsQpsConfigurationEtag: {
        serializedName: "x-ms-qps-configuration-etag",
        type: {
          name: "String"
        }
      },
      xMsQpsServicePollingIntervalHint: {
        serializedName: "x-ms-qps-service-polling-interval-hint",
        type: {
          name: "Number"
        }
      },
      xMsQpsServiceEndpointRedirectV2: {
        serializedName: "x-ms-qps-service-endpoint-redirect-v2",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QuickpulseClientPostHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QuickpulseClientPostHeaders",
    modelProperties: {
      xMsQpsSubscribed: {
        serializedName: "x-ms-qps-subscribed",
        type: {
          name: "String"
        }
      },
      xMsQpsConfigurationEtag: {
        serializedName: "x-ms-qps-configuration-etag",
        type: {
          name: "String"
        }
      },
      xMsQpsServicePollingIntervalHint: {
        serializedName: "x-ms-qps-service-polling-interval-hint",
        type: {
          name: "Number"
        }
      },
      xMsQpsServiceEndpointRedirect: {
        serializedName: "x-ms-qps-service-endpoint-redirect",
        type: {
          name: "String"
        }
      },
      xMsQpsServiceEndpointRedirectV2: {
        serializedName: "x-ms-qps-service-endpoint-redirect-v2",
        type: {
          name: "String"
        }
      }
    }
  }
};
