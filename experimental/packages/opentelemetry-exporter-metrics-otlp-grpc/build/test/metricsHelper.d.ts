import { Counter, Histogram, ObservableGauge, ObservableResult } from '@opentelemetry/api';
import * as grpc from '@grpc/grpc-js';
import { IKeyValue, IMetric, IResource } from '@opentelemetry/otlp-transformer';
export declare function collect(): Promise<import("@opentelemetry/sdk-metrics").CollectionResult>;
export declare function setUp(): void;
export declare function shutdown(): Promise<void>;
export declare function mockCounter(): Counter;
export declare function mockObservableGauge(callback: (observableResult: ObservableResult) => void): ObservableGauge;
export declare function mockHistogram(): Histogram;
export declare function ensureExportedAttributesAreCorrect(attributes: IKeyValue[]): void;
export declare function ensureExportedCounterIsCorrect(metric: IMetric, time?: number, startTime?: number): void;
export declare function ensureExportedObservableGaugeIsCorrect(metric: IMetric, time?: number, startTime?: number): void;
export declare function ensureExportedHistogramIsCorrect(metric: IMetric, time?: number, startTime?: number, explicitBounds?: number[], bucketCounts?: string[]): void;
export declare function ensureResourceIsCorrect(resource: IResource): void;
export declare function ensureMetadataIsCorrect(actual?: grpc.Metadata, expected?: grpc.Metadata): void;
//# sourceMappingURL=metricsHelper.d.ts.map