import { SpanStatusCode, SpanStatus, Span } from '@opentelemetry/api';
import type * as grpcJsTypes from '@grpc/grpc-js';
import { IgnoreMatcher } from './types';
export declare const URI_REGEX: RegExp;
export declare const findIndex: <T>(args: T[], fn: (arg: T) => boolean) => number;
/**
 * Convert a grpc status code to an opentelemetry SpanStatus code.
 * @param status
 */
export declare const _grpcStatusCodeToOpenTelemetryStatusCode: (status?: grpcJsTypes.status | undefined) => SpanStatusCode;
export declare const _grpcStatusCodeToSpanStatus: (status: number) => SpanStatus;
/**
 * Returns true if the current plugin configuration
 * ignores the given method.
 * @param methodName the name of the method
 * @param ignoredMethods a list of matching patterns
 * @param onException an error handler for matching exceptions
 */
export declare const _methodIsIgnored: (methodName: string, ignoredMethods?: IgnoreMatcher[]) => boolean;
/**
 * Return method and service values getting from grpc name/path
 * @param name the grpc name/path
 */
export declare const _extractMethodAndService: (name: string) => {
    service: string;
    method: string;
};
export declare function metadataCapture(type: 'request' | 'response', metadataToAdd: string[]): (span: Span, metadata: grpcJsTypes.Metadata) => void;
//# sourceMappingURL=utils.d.ts.map