import * as oc from '@opencensus/core';
import { ShimTracer } from './ShimTracer';
import { Span } from '@opentelemetry/api';
export declare const DEFAULT_SPAN_NAME = "span";
interface Options {
    shimTracer: ShimTracer;
    otelSpan: Span;
    isRootSpan?: boolean | undefined;
    kind?: oc.SpanKind | undefined;
    parentSpanId?: string | undefined;
}
export declare class ShimSpan implements oc.Span {
    get id(): string;
    get tracer(): oc.TracerBase;
    logger: oc.Logger;
    /** These are not readable in OTel so we return empty values */
    attributes: oc.Attributes;
    annotations: oc.Annotation[];
    messageEvents: oc.MessageEvent[];
    spans: oc.Span[];
    links: oc.Link[];
    name: string;
    status: oc.Status;
    activeTraceParams: oc.TraceParams;
    droppedAttributesCount: number;
    droppedLinksCount: number;
    droppedAnnotationsCount: number;
    droppedMessageEventsCount: number;
    started: boolean;
    ended: boolean;
    numberOfChildren: number;
    duration: number;
    /** Actual private attributes */
    private _shimTracer;
    readonly otelSpan: Span;
    private _isRootSpan;
    readonly kind: oc.SpanKind;
    readonly parentSpanId: string;
    get remoteParent(): boolean;
    /** Constructs a new SpanBaseModel instance. */
    constructor({ shimTracer, otelSpan, isRootSpan, kind, parentSpanId, }: Options);
    /** Returns whether a span is root or not. */
    isRootSpan(): boolean;
    get traceId(): string;
    /** Gets the trace state */
    get traceState(): oc.TraceState | undefined;
    /** No-op implementation of this method. */
    get startTime(): Date;
    /** No-op implementation of this method. */
    get endTime(): Date;
    /** No-op implementation of this method. */
    allDescendants(): oc.Span[];
    /** Gives the TraceContext of the span. */
    get spanContext(): oc.SpanContext;
    addAttribute(key: string, value: string | number | boolean | object): void;
    addAnnotation(description: string, attributes?: oc.Attributes, timestamp?: number): void;
    /** No-op implementation of this method. */
    addLink(): void;
    /** No-op implementation of this method. */
    addMessageEvent(type: oc.MessageEventType, id: number, timestamp?: number, uncompressedSize?: number, compressedSize?: number): void;
    /** No-op implementation of this method. */
    setStatus(code: oc.CanonicalCode, message?: string): void;
    /** No-op implementation of this method. */
    start(): void;
    end(): void;
    /** No-op implementation of this method. */
    truncate(): void;
    /** Starts a new Span instance as a child of this instance */
    startChildSpan(options?: oc.SpanOptions): oc.Span;
}
export {};
//# sourceMappingURL=ShimSpan.d.ts.map