import { MetricReader, PushMetricExporter } from '@opentelemetry/sdk-metrics';
export declare class TestMetricReader extends MetricReader {
    private _exporter;
    constructor(_exporter: PushMetricExporter);
    protected onForceFlush(): Promise<void>;
    protected onShutdown(): Promise<void>;
    collectAndExport(): Promise<void>;
}
//# sourceMappingURL=TestMetricReader.d.ts.map