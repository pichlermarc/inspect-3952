import { ExportResult } from '@opentelemetry/core';
import { InMemorySpanExporter, ReadableSpan } from '../../../src';
/**
 * A test-only exporter that delays during export to mimic a real exporter.
 */
export declare class TestExporterWithDelay extends InMemorySpanExporter {
    private _exporterCreatedSpans;
    constructor();
    export(spans: ReadableSpan[], resultCallback: (result: ExportResult) => void): void;
    shutdown(): Promise<void>;
    reset(): void;
    getExporterCreatedSpans(): ReadableSpan[];
}
//# sourceMappingURL=TestExporterWithDelay.d.ts.map