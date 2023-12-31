import { GrpcInstrumentationConfig } from './types';
import * as api from '@opentelemetry/api';
/** The metadata key under which span context is stored as a binary value. */
export declare const GRPC_TRACE_KEY = "grpc-trace-bin";
export declare class GrpcInstrumentation {
    private _grpcJsInstrumentation;
    readonly instrumentationName: string;
    readonly instrumentationVersion: string;
    constructor(config?: GrpcInstrumentationConfig);
    setConfig(config?: GrpcInstrumentationConfig): void;
    /**
     * @internal
     * Public reference to the protected BaseInstrumentation `_config` instance to be used by this
     * plugin's external helper functions
     */
    getConfig(): GrpcInstrumentationConfig;
    init(): void;
    enable(): void;
    disable(): void;
    /**
     * Sets MeterProvider to this plugin
     * @param meterProvider
     */
    setMeterProvider(meterProvider: api.MeterProvider): void;
    /**
     * Sets TraceProvider to this plugin
     * @param tracerProvider
     */
    setTracerProvider(tracerProvider: api.TracerProvider): void;
}
//# sourceMappingURL=instrumentation.d.ts.map