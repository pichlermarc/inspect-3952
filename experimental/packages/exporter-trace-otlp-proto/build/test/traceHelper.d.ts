/// <reference types="node" />
import { ReadableSpan } from '@opentelemetry/sdk-trace-base';
import { Stream } from 'stream';
import { IEvent, IExportTraceServiceRequest, IKeyValue, ILink, ISpan } from '@opentelemetry/otlp-transformer';
export declare const mockedReadableSpan: ReadableSpan;
export declare function ensureProtoEventsAreCorrect(events: IEvent[]): void;
export declare function ensureProtoAttributesAreCorrect(attributes: IKeyValue[]): void;
export declare function ensureProtoLinksAreCorrect(attributes: ILink[]): void;
export declare function ensureProtoSpanIsCorrect(span: ISpan): void;
export declare function ensureExportTraceServiceRequestIsSet(json: IExportTraceServiceRequest): void;
export declare class MockedResponse extends Stream {
    private _code;
    private _msg?;
    constructor(_code: number, _msg?: string | undefined);
    send(data: string): void;
    get statusCode(): number;
    get statusMessage(): string | undefined;
}
//# sourceMappingURL=traceHelper.d.ts.map