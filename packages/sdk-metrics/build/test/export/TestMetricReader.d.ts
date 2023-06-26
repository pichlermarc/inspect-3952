import { MetricReader } from '../../src';
import { MetricCollector } from '../../src/state/MetricCollector';
import { MetricReaderOptions } from '../../src/export/MetricReader';
/**
 * A test metric reader that implements no-op onForceFlush() and onShutdown() handlers.
 */
export declare class TestMetricReader extends MetricReader {
    protected onForceFlush(): Promise<void>;
    protected onShutdown(): Promise<void>;
    getMetricCollector(): MetricCollector;
}
export declare class TestDeltaMetricReader extends TestMetricReader {
    constructor(options?: MetricReaderOptions);
}
//# sourceMappingURL=TestMetricReader.d.ts.map