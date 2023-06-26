import { ExportResult } from '@opentelemetry/core';
import { AggregationTemporality, PushMetricExporter, ResourceMetrics } from '../../src';
export declare class TestMetricExporter implements PushMetricExporter {
    resourceMetricsList: ResourceMetrics[];
    export(resourceMetrics: ResourceMetrics, resultCallback: (result: ExportResult) => void): void;
    forceFlush(): Promise<void>;
    shutdown(): Promise<void>;
    selectAggregationTemporality(): AggregationTemporality;
}
export declare class TestDeltaMetricExporter extends TestMetricExporter {
    selectAggregationTemporality(): AggregationTemporality;
}
//# sourceMappingURL=TestMetricExporter.d.ts.map