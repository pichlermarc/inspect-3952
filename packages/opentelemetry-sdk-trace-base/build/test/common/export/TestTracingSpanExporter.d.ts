import { ExportResult } from '@opentelemetry/core';
import { InMemorySpanExporter, ReadableSpan } from '../../../src';
/**
 * A test-only span exporter that naively simulates triggering instrumentation
 * (creating new spans) during export.
 */
export declare class TestTracingSpanExporter extends InMemorySpanExporter {
    private _exporterCreatedSpans;
    private _tracer;
    constructor();
    export(spans: ReadableSpan[], resultCallback: (result: ExportResult) => void): void;
    shutdown(): Promise<void>;
    reset(): void;
    getExporterCreatedSpans(): ReadableSpan[];
}
//# sourceMappingURL=TestTracingSpanExporter.d.ts.map