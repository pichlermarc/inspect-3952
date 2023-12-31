import { MetricAttributes, SpanAttributes, SpanStatusCode, Span, SpanKind } from '@opentelemetry/api';
import { IncomingHttpHeaders, IncomingMessage, OutgoingHttpHeaders, RequestOptions, ServerResponse } from 'http';
import * as url from 'url';
import { Err, IgnoreMatcher, ParsedRequestOptions } from './types';
/**
 * Get an absolute url
 */
export declare const getAbsoluteUrl: (requestUrl: ParsedRequestOptions | null, headers: IncomingHttpHeaders | OutgoingHttpHeaders, fallbackProtocol?: string) => string;
/**
 * Parse status code from HTTP response. [More details](https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/data-http.md#status)
 */
export declare const parseResponseStatus: (kind: SpanKind, statusCode?: number) => SpanStatusCode;
/**
 * Check whether the given obj match pattern
 * @param constant e.g URL of request
 * @param pattern Match pattern
 */
export declare const satisfiesPattern: (constant: string, pattern: IgnoreMatcher) => boolean;
/**
 * Check whether the given request is ignored by configuration
 * It will not re-throw exceptions from `list` provided by the client
 * @param constant e.g URL of request
 * @param [list] List of ignore patterns
 * @param [onException] callback for doing something when an exception has
 *     occurred
 */
export declare const isIgnored: (constant: string, list?: IgnoreMatcher[], onException?: ((error: unknown) => void) | undefined) => boolean;
/**
 * Sets the span with the error passed in params
 * @param {Span} span the span that need to be set
 * @param {Error} error error that will be set to span
 */
export declare const setSpanWithError: (span: Span, error: Err) => void;
/**
 * Adds attributes for request content-length and content-encoding HTTP headers
 * @param { IncomingMessage } Request object whose headers will be analyzed
 * @param { SpanAttributes } SpanAttributes object to be modified
 */
export declare const setRequestContentLengthAttribute: (request: IncomingMessage, attributes: SpanAttributes) => void;
/**
 * Adds attributes for response content-length and content-encoding HTTP headers
 * @param { IncomingMessage } Response object whose headers will be analyzed
 * @param { SpanAttributes } SpanAttributes object to be modified
 */
export declare const setResponseContentLengthAttribute: (response: IncomingMessage, attributes: SpanAttributes) => void;
export declare const isCompressed: (headers: OutgoingHttpHeaders | IncomingHttpHeaders) => boolean;
/**
 * Makes sure options is an url object
 * return an object with default value and parsed options
 * @param options original options for the request
 * @param [extraOptions] additional options for the request
 */
export declare const getRequestInfo: (options: url.URL | RequestOptions | string, extraOptions?: RequestOptions) => {
    origin: string;
    pathname: string;
    method: string;
    optionsParsed: RequestOptions;
};
/**
 * Makes sure options is of type string or object
 * @param options for the request
 */
export declare const isValidOptionsType: (options: unknown) => boolean;
export declare const extractHostnameAndPort: (requestOptions: Pick<ParsedRequestOptions, 'hostname' | 'host' | 'port' | 'protocol'>) => {
    hostname: string;
    port: number | string;
};
/**
 * Returns outgoing request attributes scoped to the options passed to the request
 * @param {ParsedRequestOptions} requestOptions the same options used to make the request
 * @param {{ component: string, hostname: string, hookAttributes?: SpanAttributes }} options used to pass data needed to create attributes
 */
export declare const getOutgoingRequestAttributes: (requestOptions: ParsedRequestOptions, options: {
    component: string;
    hostname: string;
    port: string | number;
    hookAttributes?: SpanAttributes;
}) => SpanAttributes;
/**
 * Returns outgoing request Metric attributes scoped to the request data
 * @param {SpanAttributes} spanAttributes the span attributes
 */
export declare const getOutgoingRequestMetricAttributes: (spanAttributes: SpanAttributes) => MetricAttributes;
/**
 * Returns attributes related to the kind of HTTP protocol used
 * @param {string} [kind] Kind of HTTP protocol used: "1.0", "1.1", "2", "SPDY" or "QUIC".
 */
export declare const getAttributesFromHttpKind: (kind?: string) => SpanAttributes;
/**
 * Returns outgoing request attributes scoped to the response data
 * @param {IncomingMessage} response the response object
 * @param {{ hostname: string }} options used to pass data needed to create attributes
 */
export declare const getOutgoingRequestAttributesOnResponse: (response: IncomingMessage) => SpanAttributes;
/**
 * Returns outgoing request Metric attributes scoped to the response data
 * @param {SpanAttributes} spanAttributes the span attributes
 */
export declare const getOutgoingRequestMetricAttributesOnResponse: (spanAttributes: SpanAttributes) => MetricAttributes;
/**
 * Returns incoming request attributes scoped to the request data
 * @param {IncomingMessage} request the request object
 * @param {{ component: string, serverName?: string, hookAttributes?: SpanAttributes }} options used to pass data needed to create attributes
 */
export declare const getIncomingRequestAttributes: (request: IncomingMessage, options: {
    component: string;
    serverName?: string;
    hookAttributes?: SpanAttributes;
}) => SpanAttributes;
/**
 * Returns incoming request Metric attributes scoped to the request data
 * @param {SpanAttributes} spanAttributes the span attributes
 * @param {{ component: string }} options used to pass data needed to create attributes
 */
export declare const getIncomingRequestMetricAttributes: (spanAttributes: SpanAttributes) => MetricAttributes;
/**
 * Returns incoming request attributes scoped to the response data
 * @param {(ServerResponse & { socket: Socket; })} response the response object
 */
export declare const getIncomingRequestAttributesOnResponse: (request: IncomingMessage, response: ServerResponse) => SpanAttributes;
/**
 * Returns incoming request Metric attributes scoped to the request data
 * @param {SpanAttributes} spanAttributes the span attributes
 */
export declare const getIncomingRequestMetricAttributesOnResponse: (spanAttributes: SpanAttributes) => MetricAttributes;
export declare function headerCapture(type: 'request' | 'response', headers: string[]): (span: Span, getHeader: (key: string) => undefined | string | string[] | number) => void;
//# sourceMappingURL=utils.d.ts.map