/// <reference types="node" />
import { Counter, ObservableResult, Histogram, ObservableGauge } from '@opentelemetry/api';
import { MetricReader } from '@opentelemetry/sdk-metrics';
import { IExportMetricsServiceRequest, IKeyValue, IMetric } from '@opentelemetry/otlp-transformer';
import { Stream } from 'stream';
export declare class TestMetricReader extends MetricReader {
    protected onForceFlush(): Promise<void>;
    protected onShutdown(): Promise<void>;
}
export declare function collect(): Promise<import("@opentelemetry/sdk-metrics").CollectionResult>;
export declare function setUp(): void;
export declare function shutdown(): Promise<void>;
export declare function mockCounter(): Counter;
export declare function mockObservableGauge(callback: (observableResult: ObservableResult) => void): ObservableGauge;
export declare function mockHistogram(): Histogram;
export declare function ensureProtoAttributesAreCorrect(attributes: IKeyValue[]): void;
export declare function ensureExportedCounterIsCorrect(metric: IMetric, time?: number, startTime?: number): void;
export declare function ensureExportedObservableGaugeIsCorrect(metric: IMetric, time?: number, startTime?: number): void;
export declare function ensureExportedHistogramIsCorrect(metric: IMetric, time?: number, startTime?: number, explicitBounds?: number[], bucketCounts?: string[]): void;
export declare function ensureExportMetricsServiceRequestIsSet(json: IExportMetricsServiceRequest): void;
export declare class MockedResponse extends Stream {
    private _code;
    private _msg?;
    constructor(_code: number, _msg?: string | undefined);
    send(data: string): void;
    get statusCode(): number;
    get statusMessage(): string | undefined;
}
//# sourceMappingURL=metricsHelper.d.ts.map