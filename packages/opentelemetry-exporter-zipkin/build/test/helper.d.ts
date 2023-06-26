import { ReadableSpan } from '@opentelemetry/sdk-trace-base';
import { Span } from '../src/types';
export declare const mockedReadableSpan: ReadableSpan;
export declare function ensureHeadersContain(actual: {
    [key: string]: string;
}, expected: {
    [key: string]: string;
}): void;
export declare function ensureSpanIsCorrect(span: Span): void;
//# sourceMappingURL=helper.d.ts.map