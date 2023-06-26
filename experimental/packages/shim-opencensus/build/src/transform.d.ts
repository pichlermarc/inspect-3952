import * as oc from '@opencensus/core';
import { Attributes, SpanContext, SpanKind, TimeInput } from '@opentelemetry/api';
export declare function mapSpanKind(kind: oc.SpanKind | undefined): SpanKind | undefined;
export declare function mapSpanContext({ spanId, traceId, options, traceState, }: oc.SpanContext): SpanContext;
export declare function reverseMapSpanContext({ spanId, traceId, traceFlags, traceState, }: SpanContext): oc.SpanContext;
export declare function mapMessageEvent(type: oc.MessageEventType, id: number, timestamp?: number, uncompressedSize?: number, compressedSize?: number): [string, Attributes, TimeInput | undefined];
//# sourceMappingURL=transform.d.ts.map