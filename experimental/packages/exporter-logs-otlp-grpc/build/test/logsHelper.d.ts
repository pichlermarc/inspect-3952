import * as grpc from '@grpc/grpc-js';
import { IAnyValue, IKeyValue, ILogRecord, IResource } from '@opentelemetry/otlp-transformer';
import { ReadableLogRecord } from '@opentelemetry/sdk-logs';
export declare const mockedReadableLogRecord: ReadableLogRecord;
export declare function ensureExportedAttributesAreCorrect(attributes: IKeyValue[]): void;
export declare function ensureExportedBodyIsCorrect(body?: IAnyValue): void;
export declare function ensureExportedLogRecordIsCorrect(logRecord: ILogRecord): void;
export declare function ensureResourceIsCorrect(resource: IResource): void;
export declare function ensureMetadataIsCorrect(actual?: grpc.Metadata, expected?: grpc.Metadata): void;
//# sourceMappingURL=logsHelper.d.ts.map