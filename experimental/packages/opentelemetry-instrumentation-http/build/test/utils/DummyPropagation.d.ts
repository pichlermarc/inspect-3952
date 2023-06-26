/// <reference types="node" />
import { Context, TextMapPropagator } from '@opentelemetry/api';
import type * as http from 'http';
export declare class DummyPropagation implements TextMapPropagator {
    static TRACE_CONTEXT_KEY: string;
    static SPAN_CONTEXT_KEY: string;
    extract(context: Context, carrier: http.OutgoingHttpHeaders): Context;
    inject(context: Context, headers: {
        [custom: string]: string;
    }): void;
    fields(): string[];
}
//# sourceMappingURL=DummyPropagation.d.ts.map