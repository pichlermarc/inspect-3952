import { OTLPExporterConfigBase } from '@opentelemetry/otlp-exporter-base';
import { OTLPProtoExporterBrowserBase, ServiceClientType } from '@opentelemetry/otlp-proto-exporter-base';
import { IExportLogsServiceRequest } from '@opentelemetry/otlp-transformer';
import { ReadableLogRecord, LogRecordExporter } from '@opentelemetry/sdk-logs';
/**
 * Collector Trace Exporter for Web
 */
export declare class OTLPLogsExporter extends OTLPProtoExporterBrowserBase<ReadableLogRecord, IExportLogsServiceRequest> implements LogRecordExporter {
    constructor(config?: OTLPExporterConfigBase);
    convert(logs: ReadableLogRecord[]): IExportLogsServiceRequest;
    getDefaultUrl(config: OTLPExporterConfigBase): string;
    getServiceClientType(): ServiceClientType;
}
//# sourceMappingURL=OTLPLogsExporter.d.ts.map