import { InstrumentationLibrary } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { ReadableSpan } from '@opentelemetry/sdk-trace-base';
import { IEvent, IExportTraceServiceRequest, IKeyValue, ILink, IResource, ISpan } from '@opentelemetry/otlp-transformer';
export declare const mockedReadableSpan: ReadableSpan;
export declare const mockedResources: Resource[];
export declare const mockedInstrumentationLibraries: InstrumentationLibrary[];
export declare const basicTrace: ReadableSpan[];
export declare const multiResourceTrace: ReadableSpan[];
export declare const multiInstrumentationLibraryTrace: ReadableSpan[];
export declare function ensureEventsAreCorrect(events: IEvent[]): void;
export declare function ensureAttributesAreCorrect(attributes: IKeyValue[]): void;
export declare function ensureLinksAreCorrect(attributes: ILink[], useHex?: boolean): void;
export declare function ensureSpanIsCorrect(span: ISpan, useHex?: boolean): void;
export declare function ensureWebResourceIsCorrect(resource: IResource): void;
export declare function ensureExportTraceServiceRequestIsSet(json: IExportTraceServiceRequest): void;
export declare function ensureHeadersContain(actual: {
    [key: string]: string;
}, expected: {
    [key: string]: string;
}): void;
//# sourceMappingURL=traceHelper.d.ts.map