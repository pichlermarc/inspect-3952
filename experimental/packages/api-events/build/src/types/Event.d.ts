import { Attributes } from '@opentelemetry/api';
export interface Event {
    /**
     * The time when the event occurred as UNIX Epoch time in nanoseconds.
     */
    timestamp?: number;
    /**
     * The name of the event.
     */
    name: string;
    /**
     * Additional attributes that describe the event.
     */
    attributes?: Attributes;
    /**
     * 8 least significant bits are the trace flags as defined in W3C Trace Context specification.
     */
    traceFlags?: number;
    /**
     * A unique identifier for a trace.
     */
    traceId?: string;
    /**
     * A unique identifier for a span within a trace.
     */
    spanId?: string;
}
//# sourceMappingURL=Event.d.ts.map