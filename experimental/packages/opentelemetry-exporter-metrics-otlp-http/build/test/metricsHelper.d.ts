import { Counter, ObservableResult, Histogram, ObservableCounter, ObservableGauge, ObservableUpDownCounter } from '@opentelemetry/api';
import { Resource } from '@opentelemetry/resources';
import { InstrumentationScope } from '@opentelemetry/core';
import { View } from '@opentelemetry/sdk-metrics';
import { IExportMetricsServiceRequest, IKeyValue, IMetric, IResource } from '@opentelemetry/otlp-transformer';
export declare const HISTOGRAM_AGGREGATION_VIEW: View;
export declare function collect(): Promise<import("@opentelemetry/sdk-metrics").CollectionResult>;
export declare function setUp(views?: View[]): void;
export declare function shutdown(): Promise<void>;
export declare function mockCounter(): Counter;
export declare function mockObservableGauge(callback: (observableResult: ObservableResult) => void, name?: string): ObservableGauge;
export declare function mockDoubleCounter(): Counter;
export declare function mockObservableCounter(callback: (observableResult: ObservableResult) => void, name?: string): ObservableCounter;
export declare function mockObservableUpDownCounter(callback: (observableResult: ObservableResult) => void, name?: string): ObservableUpDownCounter;
export declare function mockHistogram(): Histogram;
export declare const mockedResources: Resource[];
export declare const mockedInstrumentationLibraries: InstrumentationScope[];
export declare function ensureAttributesAreCorrect(attributes: IKeyValue[]): void;
export declare function ensureWebResourceIsCorrect(resource: IResource): void;
export declare function ensureCounterIsCorrect(metric: IMetric, time?: number, startTime?: number): void;
export declare function ensureDoubleCounterIsCorrect(metric: IMetric, time: number, endTime: number): void;
export declare function ensureObservableGaugeIsCorrect(metric: IMetric, time: number, startTime: number, value: number, name?: string): void;
export declare function ensureObservableCounterIsCorrect(metric: IMetric, time: number, startTime: number, value: number, name?: string): void;
export declare function ensureObservableUpDownCounterIsCorrect(metric: IMetric, time: number, startTime: number, value: number, name?: string): void;
export declare function ensureHistogramIsCorrect(metric: IMetric, time: number, startTime: number, explicitBounds?: (number | null)[], bucketCounts?: number[]): void;
export declare function ensureExportMetricsServiceRequestIsSet(json: IExportMetricsServiceRequest): void;
export declare function ensureHeadersContain(actual: {
    [key: string]: string;
}, expected: {
    [key: string]: string;
}): void;
//# sourceMappingURL=metricsHelper.d.ts.map