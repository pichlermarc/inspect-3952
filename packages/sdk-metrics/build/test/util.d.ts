import { Context, BatchObservableCallback, MetricAttributes, ObservableCallback } from '@opentelemetry/api';
import { InstrumentationScope } from '@opentelemetry/core';
import { InstrumentDescriptor } from '../src/InstrumentDescriptor';
import { MetricData, DataPoint, DataPointType, ScopeMetrics } from '../src/export/MetricData';
import { HrTime } from '@opentelemetry/api';
import { Histogram } from '../src/aggregator/types';
import { AggregationTemporality } from '../src/export/AggregationTemporality';
export type Measurement = {
    value: number;
    attributes: MetricAttributes;
    context?: Context;
};
export declare const defaultResource: import("@opentelemetry/resources").IResource;
export declare const defaultInstrumentDescriptor: InstrumentDescriptor;
export declare const defaultInstrumentationScope: InstrumentationScope;
export declare const commonValues: number[];
export declare const commonAttributes: MetricAttributes[];
export declare const sleep: (time: number) => Promise<void>;
export declare function assertScopeMetrics(actual: unknown, instrumentationScope: Partial<InstrumentationScope>): asserts actual is ScopeMetrics;
export declare function assertMetricData(actual: unknown, dataPointType?: DataPointType, instrumentDescriptor?: Partial<InstrumentDescriptor> | null, aggregationTemporality?: AggregationTemporality): asserts actual is MetricData;
export declare function assertDataPoint(actual: unknown, attributes: MetricAttributes, point: Histogram | number, startTime?: HrTime, endTime?: HrTime): asserts actual is DataPoint<unknown>;
export declare function assertMeasurementEqual(actual: unknown, expected: Measurement): asserts actual is Measurement;
export declare function assertPartialDeepStrictEqual<T>(actual: unknown, expected: T, message?: string): asserts actual is T;
export declare class ObservableCallbackDelegate {
    private _delegate?;
    setDelegate(delegate: ObservableCallback): void;
    getCallback(): ObservableCallback;
}
export declare class BatchObservableCallbackDelegate {
    private _delegate?;
    setDelegate(delegate: BatchObservableCallback): void;
    getCallback(): BatchObservableCallback;
}
//# sourceMappingURL=util.d.ts.map