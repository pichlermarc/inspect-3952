import { Tracer } from '@opentelemetry/api';
interface OpenCensusShimConfig {
    /**
     * An optional OpenTelemetry tracer to send OpenCensus spans to. If not provided, one will be
     * created for you.
     */
    tracer?: Tracer | undefined;
}
/**
 * Patches OpenCensus to redirect all instrumentation to OpenTelemetry. Uses
 * require-in-the-middle to override the implementation of OpenCensus's CoreTracer.
 *
 * Use {@link uninstallShim} to undo the effects of this function.
 *
 * @param config
 */
export declare function installShim({ tracer, }?: OpenCensusShimConfig): void;
export declare function uninstallShim(): void;
export {};
//# sourceMappingURL=shim.d.ts.map