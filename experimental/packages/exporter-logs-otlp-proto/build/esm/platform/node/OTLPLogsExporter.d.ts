import { OTLPExporterConfigBase } from '@opentelemetry/otlp-exporter-base';
import { OTLPProtoExporterNodeBase, ServiceClientType } from '@opentelemetry/otlp-proto-exporter-base';
import { IExportLogsServiceRequest } from '@opentelemetry/otlp-transformer';
import { ReadableLogRecord, LogRecordExporter } from '@opentelemetry/sdk-logs';
/**
 * Collector Trace Exporter for Node
 */
export declare class OTLPLogsExporter extends OTLPProtoExporterNodeBase<ReadableLogRecord, IExportLogsServiceRequest> implements LogRecordExporter {
    constructor(config?: OTLPExporterConfigBase);
    convert(logs: ReadableLogRecord[]): IExportLogsServiceRequest;
    getDefaultUrl(config: OTLPExporterConfigBase): string;
    getServiceClientType(): ServiceClientType;
}
//# sourceMappingURL=OTLPLogsExporter.d.ts.map