import { Context, TextMapGetter, TextMapPropagator, TextMapSetter } from '@opentelemetry/api';
/**
 * Propagator for the B3 single-header HTTP format.
 * Based on: https://github.com/openzipkin/b3-propagation
 */
export declare class B3SinglePropagator implements TextMapPropagator {
    inject(context: Context, carrier: unknown, setter: TextMapSetter): void;
    extract(context: Context, carrier: unknown, getter: TextMapGetter): Context;
    fields(): string[];
}
//# sourceMappingURL=B3SinglePropagator.d.ts.map