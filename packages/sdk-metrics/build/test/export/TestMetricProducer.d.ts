import { CollectionResult } from '../../src/export/MetricData';
import { MetricProducer } from '../../src/export/MetricProducer';
export declare const emptyResourceMetrics: {
    resource: import("@opentelemetry/resources").IResource;
    scopeMetrics: never[];
};
export declare class TestMetricProducer implements MetricProducer {
    collect(): Promise<CollectionResult>;
}
//# sourceMappingURL=TestMetricProducer.d.ts.map