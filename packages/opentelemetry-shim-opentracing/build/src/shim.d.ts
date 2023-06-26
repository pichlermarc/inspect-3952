import * as api from '@opentelemetry/api';
import { SpanAttributes, SpanAttributeValue, TextMapPropagator } from '@opentelemetry/api';
import * as opentracing from 'opentracing';
/**
 * SpanContextShim wraps a {@link api.SpanContext} and implements the
 * OpenTracing span context API.
 */
export declare class SpanContextShim extends opentracing.SpanContext {
    private readonly _spanContext;
    private _baggage;
    constructor(spanContext: api.SpanContext, baggage: api.Baggage);
    /**
     * Returns the underlying {@link api.SpanContext}
     */
    getSpanContext(): api.SpanContext;
    /**
     * Returns the underlying {@link api.Baggage}
     */
    getBaggage(): api.Baggage;
    /**
     * Returns the trace ID as a string.
     */
    toTraceId(): string;
    /**
     * Returns the span ID as a string.
     */
    toSpanId(): string;
    getBaggageItem(key: string): string | undefined;
    setBaggageItem(key: string, value: string): void;
}
/**
 * TracerShim wraps a {@link api.Tracer} and implements the
 * OpenTracing tracer API.
 */
export declare class TracerShim extends opentracing.Tracer {
    private readonly _tracer;
    private readonly _propagators;
    constructor(tracer: api.Tracer, propagators?: ShimPropagators);
    startSpan(name: string, options?: opentracing.SpanOptions): opentracing.Span;
    _inject(spanContext: opentracing.SpanContext, format: string, carrier: unknown): void;
    _extract(format: string, carrier: unknown): opentracing.SpanContext | null;
    private _getPropagator;
}
/**
 * SpanShim wraps an {@link api.Span} and implements the OpenTracing Span API
 * around it.
 *
 **/
export declare class SpanShim extends opentracing.Span {
    private readonly _span;
    private readonly _contextShim;
    private readonly _tracerShim;
    constructor(tracerShim: TracerShim, span: api.Span, baggage: api.Baggage);
    /**
     * Returns a reference to the Span's context.
     *
     * @returns a {@link SpanContextShim} containing the underlying context.
     */
    context(): opentracing.SpanContext;
    /**
     * Returns the {@link opentracing.Tracer} that created the span.
     */
    tracer(): opentracing.Tracer;
    /**
     * Updates the underlying span's name.
     *
     * @param name the Span name.
     */
    setOperationName(name: string): this;
    /**
     * Finishes the span. Once the span is finished, no new updates can be applied
     * to the span.
     *
     * @param finishTime An optional timestamp to explicitly set the span's end time.
     */
    finish(finishTime?: number): void;
    /**
     * Logs an event with an optional payload.
     * @param eventName name of the event.
     * @param payload an arbitrary object to be attached to the event.
     */
    logEvent(eventName: string, payload?: SpanAttributes): void;
    /**
     * Logs a set of key value pairs. Since OpenTelemetry only supports events,
     * the KV pairs are used as attributes on a Span event.
     * @param keyValuePairs a set of key-value pairs to be used as event attributes
     * @param timestamp optional timestamp for the event
     */
    log(keyValuePairs: SpanAttributes, timestamp?: number): this;
    private _logInternal;
    /**
     * Adds a set of tags to the span.
     * @param keyValueMap set of KV pairs representing tags
     */
    addTags(keyValueMap: SpanAttributes): this;
    /**
     * Sets a tag on the span, updating the value if the key is already present
     * on the span.
     * @param key key for the tag
     * @param value value for the tag
     */
    setTag(key: string, value: SpanAttributeValue): this;
    getBaggageItem(key: string): string | undefined;
    setBaggageItem(key: string, value: string): this;
    /**
     * Returns the underlying {@link api.Span} that the shim
     * is wrapping.
     */
    getSpan(): api.Span;
    private _setErrorAsSpanStatusCode;
    private static _mapErrorTag;
}
/**
 * Propagator configuration for the {@link TracerShim}
 */
export interface ShimPropagators {
    textMapPropagator?: TextMapPropagator;
    httpHeadersPropagator?: TextMapPropagator;
}
//# sourceMappingURL=shim.d.ts.map