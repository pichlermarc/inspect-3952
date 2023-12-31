import * as api from '@opentelemetry/api';
/**
 * method "open" from XMLHttpRequest
 */
export type OpenFunction = (method: string, url: string, async?: boolean, user?: string | null, pass?: string | null) => void;
/**
 * method "send" from XMLHttpRequest
 */
export type SendFunction = typeof XMLHttpRequest.prototype.send;
export type SendBody = string | Document | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null;
/**
 * interface to store information in weak map about spans, resources and
 * callbacks
 */
export interface XhrMem {
    status?: number;
    statusText?: string;
    span: api.Span;
    spanUrl?: string;
    sendStartTime?: api.HrTime;
    createdResources?: {
        observer: PerformanceObserver;
        entries: PerformanceResourceTiming[];
    };
    callbackToRemoveEvents?: Function;
}
export type PropagateTraceHeaderCorsUrl = string | RegExp;
export type PropagateTraceHeaderCorsUrls = PropagateTraceHeaderCorsUrl | PropagateTraceHeaderCorsUrl[];
//# sourceMappingURL=types.d.ts.map