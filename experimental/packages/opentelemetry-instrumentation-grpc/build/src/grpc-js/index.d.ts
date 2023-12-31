import type * as grpcJs from '@grpc/grpc-js';
import { InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { InstrumentationBase } from '@opentelemetry/instrumentation';
import { GrpcInstrumentationConfig } from '../types';
export declare class GrpcJsInstrumentation extends InstrumentationBase {
    private _metadataCapture;
    constructor(name: string, version: string, config?: GrpcInstrumentationConfig);
    init(): InstrumentationNodeModuleDefinition<typeof grpcJs>[];
    getConfig(): GrpcInstrumentationConfig;
    setConfig(config?: GrpcInstrumentationConfig): void;
    /**
     * Patch for grpc.Server.prototype.register(...) function. Provides auto-instrumentation for
     * client_stream, server_stream, bidi, unary server handler calls.
     */
    private _patchServer;
    /**
     * Entry point for applying client patches to `grpc.makeClientConstructor(...)` equivalents
     * @param this GrpcJsPlugin
     */
    private _patchClient;
    /**
     * Entry point for client patching for grpc.loadPackageDefinition(...)
     * @param this - GrpcJsPlugin
     */
    private _patchLoadPackageDefinition;
    /**
     * Parse initial client call properties and start a span to trace its execution
     */
    private _getPatchedClientMethods;
    /**
     * Utility function to patch *all* functions loaded through a proto file.
     * Recursively searches for Client classes and patches all methods, reversing the
     * parsing done by grpc.loadPackageDefinition
     * https://github.com/grpc/grpc-node/blob/1d14203c382509c3f36132bd0244c99792cb6601/packages/grpc-js/src/make-client.ts#L200-L217
     */
    private _patchLoadedPackage;
    private _createMetadataCapture;
}
//# sourceMappingURL=index.d.ts.map