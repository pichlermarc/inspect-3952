/// <reference types="mocha" />
import { ReadableSpan } from '@opentelemetry/sdk-trace-base';
import { ShimTracer } from '../src/ShimTracer';
import { Tracer, TracerProvider } from '@opentelemetry/api';
export declare function withTestTracer(func: (shimTracer: ShimTracer, otelTracer: Tracer) => void | Promise<void>): Promise<ReadableSpan[]>;
export declare function withTestTracerProvider(func: (otelTracerProvider: TracerProvider) => void | Promise<void>): Promise<ReadableSpan[]>;
export declare function setupNodeContextManager(before: Mocha.HookFunction, after: Mocha.HookFunction): void;
//# sourceMappingURL=util.d.ts.map