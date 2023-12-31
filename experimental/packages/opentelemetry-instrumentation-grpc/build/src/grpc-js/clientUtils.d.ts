/// <reference types="node" />
import { GrpcJsInstrumentation } from './';
import type { GrpcClientFunc } from './types';
import { Span } from '@opentelemetry/api';
import type * as grpcJs from '@grpc/grpc-js';
import { EventEmitter } from 'events';
import { metadataCaptureType } from '../internal-types';
/**
 * Parse a package method list and return a list of methods to patch
 * with both possible casings e.g. "TestMethod" & "testMethod"
 */
export declare function getMethodsToWrap(this: GrpcJsInstrumentation, client: typeof grpcJs.Client, methods: {
    [key: string]: {
        originalName?: string;
    };
}): string[];
/**
 * Execute grpc client call. Apply completitionspan properties and end the
 * span on callback or receiving an emitted event.
 */
export declare function makeGrpcClientRemoteCall(metadataCapture: metadataCaptureType, original: GrpcClientFunc, args: unknown[], metadata: grpcJs.Metadata, self: grpcJs.Client): (span: Span) => EventEmitter;
/**
 * Returns the metadata argument from user provided arguments (`args`)
 */
export declare function getMetadata(this: GrpcJsInstrumentation, grpcClient: typeof grpcJs, original: GrpcClientFunc, args: Array<unknown | grpcJs.Metadata>): grpcJs.Metadata;
/**
 * Inject opentelemetry trace context into `metadata` for use by another
 * grpc receiver
 * @param metadata
 */
export declare function setSpanContext(metadata: grpcJs.Metadata): void;
//# sourceMappingURL=clientUtils.d.ts.map