import { ReadableSpan } from '@opentelemetry/sdk-trace-base';
import * as grpc from '@grpc/grpc-js';
import { IEvent, IKeyValue, ILink, IResource, ISpan } from '@opentelemetry/otlp-transformer';
export declare const mockedReadableSpan: ReadableSpan;
export declare function ensureExportedEventsAreCorrect(events: IEvent[]): void;
export declare function ensureExportedAttributesAreCorrect(attributes: IKeyValue[]): void;
export declare function ensureExportedLinksAreCorrect(attributes: ILink[]): void;
export declare function ensureExportedSpanIsCorrect(span: ISpan): void;
export declare function ensureResourceIsCorrect(resource: IResource): void;
export declare function ensureMetadataIsCorrect(actual?: grpc.Metadata, expected?: grpc.Metadata): void;
//# sourceMappingURL=traceHelper.d.ts.map