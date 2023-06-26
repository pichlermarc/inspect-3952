import { SpanKind, SpanStatusCode } from '@opentelemetry/api';
import type * as grpcJs from '@grpc/grpc-js';
import { ReadableSpan } from '@opentelemetry/sdk-trace-base';
export declare const grpcStatusCodeToOpenTelemetryStatusCode: (status: grpcJs.status) => SpanStatusCode;
export declare const assertSpan: (component: string, span: ReadableSpan, kind: SpanKind, validations: {
    name: string;
    status: grpcJs.status;
    netPeerName?: string;
    netPeerPort?: number;
}) => void;
export declare const assertPropagation: (incomingSpan: ReadableSpan, outgoingSpan: ReadableSpan) => void;
//# sourceMappingURL=assertionUtils.d.ts.map