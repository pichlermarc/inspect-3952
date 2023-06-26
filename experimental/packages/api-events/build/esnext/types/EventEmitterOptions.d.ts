import { Attributes } from '@opentelemetry/api';
export interface EventEmitterOptions {
    /**
     * The schemaUrl of the tracer or instrumentation library
     * @default ''
     */
    schemaUrl?: string;
    /**
     * The instrumentation scope attributes to associate with emitted telemetry
     */
    scopeAttributes?: Attributes;
}
//# sourceMappingURL=EventEmitterOptions.d.ts.map