import { IAnyValue, IExportLogsServiceRequest, IKeyValue, ILogRecord, IResource } from '@opentelemetry/otlp-transformer';
import { ReadableLogRecord } from '@opentelemetry/sdk-logs';
export declare const mockedReadableLogRecord: ReadableLogRecord;
export declare function ensureExportedAttributesAreCorrect(attributes: IKeyValue[]): void;
export declare function ensureExportedBodyIsCorrect(body?: IAnyValue): void;
export declare function ensureExportedLogRecordIsCorrect(logRecord: ILogRecord): void;
export declare function ensureResourceIsCorrect(resource: IResource): void;
export declare function ensureExportLogsServiceRequestIsSet(json: IExportLogsServiceRequest): void;
//# sourceMappingURL=logHelper.d.ts.map