const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
const { trace, context, propagation } = require('@opentelemetry/api');

// Crear proveedor de tracer
const provider = new NodeTracerProvider();

// Crear el exportador Jaeger
const exporter = new JaegerExporter({
  serviceName: 'api-demo',
  host: 'jaeger-agent',
  port: 5775, // Puerto UDP por defecto para el agente Jaeger
});

// Asegurarse de que el proveedor use el exportador
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

// Registrar el proveedor
provider.register();

// Obtener el tracer
const tracer = trace.getTracer('api-demo');

// Iniciar un span (opcional)
const span = tracer.startSpan('my-span');
span.end();

console.log('🟢 OpenTelemetry inicializado correctamente');

