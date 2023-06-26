/// <reference types="node" />
import { IAnyValue, IExportLogsServiceRequest, IKeyValue, ILogRecord, IResource } from '@opentelemetry/otlp-transformer';
import { ReadableLogRecord } from '@opentelemetry/sdk-logs';
import { Stream } from 'stream';
export declare const mockedReadableLogRecord: ReadableLogRecord;
export declare function ensureExportedAttributesAreCorrect(attributes: IKeyValue[]): void;
export declare function ensureExportedBodyIsCorrect(body?: IAnyValue): void;
export declare function ensureExportedLogRecordIsCorrect(logRecord: ILogRecord): void;
export declare function ensureResourceIsCorrect(resource: IResource): void;
export declare function ensureExportLogsServiceRequestIsSet(json: IExportLogsServiceRequest): void;
export declare class MockedResponse extends Stream {
    private _code;
    private _msg?;
    constructor(_code: number, _msg?: string | undefined);
    send(data: string): void;
    get statusCode(): number;
    get statusMessage(): string | undefined;
}
//# sourceMappingURL=logHelper.d.ts.map