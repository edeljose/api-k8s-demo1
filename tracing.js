const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
const { trace } = require('@opentelemetry/api');

// Crear proveedor de tracer
const provider = new NodeTracerProvider();

// Crear el exportador Jaeger
const exporter = new JaegerExporter({
  serviceName: 'api-demo',
  host: 'jaeger-agent', // Jaeger Agent en el mismo contenedor
  port: 5775, // Puerto UDP por defecto para el agente Jaeger
});

// Agregar el exportador al proveedor
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

// Registrar el proveedor de tracer
provider.register();

// Obtener el tracer
const tracer = trace.getTracer('api-demo');

// Iniciar un span (opcional)
const span = tracer.startSpan('my-span');
span.end();

// Imprimir mensaje de éxito
console.log('🟢 OpenTelemetry inicializado correctamente');

