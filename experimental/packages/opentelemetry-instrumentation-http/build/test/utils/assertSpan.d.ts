import { SpanKind, SpanStatus, Exception } from '@opentelemetry/api';
import { ReadableSpan } from '@opentelemetry/sdk-trace-base';
import * as http from 'http';
export declare const assertSpan: (span: ReadableSpan, kind: SpanKind, validations: {
    httpStatusCode?: number;
    httpMethod: string;
    resHeaders: http.IncomingHttpHeaders;
    hostname: string;
    pathname: string;
    reqHeaders?: http.OutgoingHttpHeaders;
    path?: string | null;
    forceStatus?: SpanStatus;
    serverName?: string;
    component: string;
    noNetPeer?: boolean;
    error?: Exception;
}) => void;
//# sourceMappingURL=assertSpan.d.ts.map