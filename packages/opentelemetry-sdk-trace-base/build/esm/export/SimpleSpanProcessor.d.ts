import { Context } from '@opentelemetry/api';
import { Span } from '../Span';
import { SpanProcessor } from '../SpanProcessor';
import { ReadableSpan } from './ReadableSpan';
import { SpanExporter } from './SpanExporter';
/**
 * An implementation of the {@link SpanProcessor} that converts the {@link Span}
 * to {@link ReadableSpan} and passes it to the configured exporter.
 *
 * Only spans that are sampled are converted.
 */
export declare class SimpleSpanProcessor implements SpanProcessor {
    private readonly _exporter;
    private _shutdownOnce;
    private _unresolvedExports;
    constructor(_exporter: SpanExporter);
    forceFlush(): Promise<void>;
    onStart(_span: Span, _parentContext: Context): void;
    onEnd(span: ReadableSpan): void;
    shutdown(): Promise<void>;
    private _shutdown;
}
//# sourceMappingURL=SimpleSpanProcessor.d.ts.map