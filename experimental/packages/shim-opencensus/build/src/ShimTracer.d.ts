/// <reference types="mocha" />
/// <reference types="node" />
import * as oc from '@opencensus/core';
import { Context, Tracer } from '@opentelemetry/api';
import { ShimSpan } from './ShimSpan';
export declare function getRootSpan(ctx: Context): ShimSpan | null;
export declare class ShimTracer implements oc.Tracer {
    private otelTracer;
    logger: oc.Logger;
    active: boolean;
    /** Noop implementations */
    sampler: oc.Sampler;
    activeTraceParams: oc.TraceParams;
    eventListeners: oc.SpanEventListener[];
    propagation: oc.Propagation;
    constructor(otelTracer: Tracer);
    start({ propagation }: oc.TracerConfig): this;
    /** Noop implementations */
    stop(): this;
    registerSpanEventListener(): void;
    unregisterSpanEventListener(): void;
    clearCurrentTrace(): void;
    onStartSpan(): void;
    onEndSpan(): void;
    setCurrentRootSpan(): void;
    /** Gets the current root span. */
    get currentRootSpan(): oc.Span;
    /**
     * Starts a root span.
     * @param options A TraceOptions object to start a root span.
     * @param fn A callback function to run after starting a root span.
     */
    startRootSpan<T>({ name, kind, spanContext }: oc.TraceOptions, fn: (root: oc.Span) => T): T;
    startChildSpan(options?: oc.SpanOptions): oc.Span;
    wrap<T>(fn: oc.Func<T>): oc.Func<T>;
    wrapEmitter(emitter: NodeJS.EventEmitter): void;
}
//# sourceMappingURL=ShimTracer.d.ts.map