// tracing.js
'use strict';

const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    // Dirección del collector de Jaeger en Kubernetes
    url: 'http://jaeger-collector.observability.svc:4317',
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start()
  .then(() => {
    console.log('OpenTelemetry initialized');
  })
  .catch((error) => {
    console.log('Error initializing OpenTelemetry', error);
  });

