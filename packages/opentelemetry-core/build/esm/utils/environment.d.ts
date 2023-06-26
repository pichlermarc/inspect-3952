import { DiagLogLevel } from '@opentelemetry/api';
/**
 * Environment interface to define all names
 */
declare const ENVIRONMENT_BOOLEAN_KEYS: readonly ["OTEL_SDK_DISABLED"];
declare type ENVIRONMENT_BOOLEANS = {
    [K in (typeof ENVIRONMENT_BOOLEAN_KEYS)[number]]?: boolean;
};
declare const ENVIRONMENT_NUMBERS_KEYS: readonly ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_BLRP_EXPORT_TIMEOUT", "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE", "OTEL_BLRP_MAX_QUEUE_SIZE", "OTEL_BLRP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"];
declare type ENVIRONMENT_NUMBERS = {
    [K in (typeof ENVIRONMENT_NUMBERS_KEYS)[number]]?: number;
};
declare const ENVIRONMENT_LISTS_KEYS: readonly ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"];
declare type ENVIRONMENT_LISTS = {
    [K in (typeof ENVIRONMENT_LISTS_KEYS)[number]]?: string[];
};
export declare type ENVIRONMENT = {
    CONTAINER_NAME?: string;
    ECS_CONTAINER_METADATA_URI_V4?: string;
    ECS_CONTAINER_METADATA_URI?: string;
    HOSTNAME?: string;
    KUBERNETES_SERVICE_HOST?: string;
    NAMESPACE?: string;
    OTEL_EXPORTER_JAEGER_AGENT_HOST?: string;
    OTEL_EXPORTER_JAEGER_ENDPOINT?: string;
    OTEL_EXPORTER_JAEGER_PASSWORD?: string;
    OTEL_EXPORTER_JAEGER_USER?: string;
    OTEL_EXPORTER_OTLP_ENDPOINT?: string;
    OTEL_EXPORTER_OTLP_TRACES_ENDPOINT?: string;
    OTEL_EXPORTER_OTLP_METRICS_ENDPOINT?: string;
    OTEL_EXPORTER_OTLP_LOGS_ENDPOINT?: string;
    OTEL_EXPORTER_OTLP_HEADERS?: string;
    OTEL_EXPORTER_OTLP_TRACES_HEADERS?: string;
    OTEL_EXPORTER_OTLP_METRICS_HEADERS?: string;
    OTEL_EXPORTER_OTLP_LOGS_HEADERS?: string;
    OTEL_EXPORTER_ZIPKIN_ENDPOINT?: string;
    OTEL_LOG_LEVEL?: DiagLogLevel;
    OTEL_RESOURCE_ATTRIBUTES?: string;
    OTEL_SERVICE_NAME?: string;
    OTEL_TRACES_EXPORTER?: string;
    OTEL_TRACES_SAMPLER_ARG?: string;
    OTEL_TRACES_SAMPLER?: string;
    OTEL_LOGS_EXPORTER?: string;
    OTEL_EXPORTER_OTLP_INSECURE?: string;
    OTEL_EXPORTER_OTLP_TRACES_INSECURE?: string;
    OTEL_EXPORTER_OTLP_METRICS_INSECURE?: string;
    OTEL_EXPORTER_OTLP_LOGS_INSECURE?: string;
    OTEL_EXPORTER_OTLP_CERTIFICATE?: string;
    OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE?: string;
    OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE?: string;
    OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE?: string;
    OTEL_EXPORTER_OTLP_COMPRESSION?: string;
    OTEL_EXPORTER_OTLP_TRACES_COMPRESSION?: string;
    OTEL_EXPORTER_OTLP_METRICS_COMPRESSION?: string;
    OTEL_EXPORTER_OTLP_LOGS_COMPRESSION?: string;
    OTEL_EXPORTER_OTLP_CLIENT_KEY?: string;
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY?: string;
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY?: string;
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY?: string;
    OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE?: string;
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE?: string;
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE?: string;
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE?: string;
    OTEL_EXPORTER_OTLP_PROTOCOL?: string;
    OTEL_EXPORTER_OTLP_TRACES_PROTOCOL?: string;
    OTEL_EXPORTER_OTLP_METRICS_PROTOCOL?: string;
    OTEL_EXPORTER_OTLP_LOGS_PROTOCOL?: string;
    OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE?: string;
} & ENVIRONMENT_BOOLEANS & ENVIRONMENT_NUMBERS & ENVIRONMENT_LISTS;
export declare type RAW_ENVIRONMENT = {
    [key: string]: string | number | undefined | string[];
};
export declare const DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT: number;
export declare const DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
export declare const DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = 128;
export declare const DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = 128;
/**
 * Default environment variables
 */
export declare const DEFAULT_ENVIRONMENT: Required<ENVIRONMENT>;
/**
 * Parses environment values
 * @param values
 */
export declare function parseEnvironment(values: RAW_ENVIRONMENT): ENVIRONMENT;
/**
 * Get environment in node or browser without
 * populating default values.
 */
export declare function getEnvWithoutDefaults(): ENVIRONMENT;
export {};
//# sourceMappingURL=environment.d.ts.map