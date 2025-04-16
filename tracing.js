// tracing.js
'use strict';

const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');

// Solo inicializar si no es entorno de test
if (process.env.NODE_ENV !== 'test') {
  const sdk = new NodeSDK({
    traceExporter: new JaegerExporter({
      endpoint: 'http://jaeger-collector.observability.svc.cluster.local:14268/api/traces',
    }),
    instrumentations: [getNodeAutoInstrumentations()],
  });

  sdk.start()
    .then(() => console.log('🟢 OpenTelemetry inicializado'))
    .catch((error) => console.error('🔴 Error inicializando OpenTelemetry', error));
}

