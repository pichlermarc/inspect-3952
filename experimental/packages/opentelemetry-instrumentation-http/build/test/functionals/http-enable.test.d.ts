import { Span as ISpan, SpanAttributes } from '@opentelemetry/api';
import type { ClientRequest, IncomingMessage, ServerResponse, RequestOptions } from 'http';
export declare const customAttributeFunction: (span: ISpan) => void;
export declare const requestHookFunction: (span: ISpan, request: ClientRequest | IncomingMessage) => void;
export declare const responseHookFunction: (span: ISpan, response: IncomingMessage | ServerResponse) => void;
export declare const startIncomingSpanHookFunction: (request: IncomingMessage) => SpanAttributes;
export declare const startOutgoingSpanHookFunction: (request: RequestOptions) => SpanAttributes;
//# sourceMappingURL=http-enable.test.d.ts.map