import { AggregationSelector, AggregationTemporalitySelector, MetricReader, PushMetricExporter } from '../../src';
/**
 * Check if AggregationSelectors behave in the same way.
 * @param reader
 * @param expectedSelector
 */
export declare function assertAggregationSelector(reader: MetricReader | PushMetricExporter, expectedSelector: AggregationSelector): void;
/**
 * Check if AggregationTemporalitySelectors behave in the same way.
 * @param reader
 * @param expectedSelector
 */
export declare function assertAggregationTemporalitySelector(reader: MetricReader | PushMetricExporter, expectedSelector: AggregationTemporalitySelector): void;
//# sourceMappingURL=utils.d.ts.map