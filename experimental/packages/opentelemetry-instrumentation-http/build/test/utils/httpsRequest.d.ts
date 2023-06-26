/// <reference types="node" />
import * as http from 'http';
import * as https from 'https';
import { URL } from 'url';
declare type GetResult = Promise<{
    data: string;
    statusCode: number | undefined;
    resHeaders: http.IncomingHttpHeaders;
    reqHeaders: http.OutgoingHttpHeaders;
    method: string | undefined;
}>;
declare function get(input: string | URL, options?: https.RequestOptions): GetResult;
declare function get(input: https.RequestOptions): GetResult;
export declare const httpsRequest: {
    get: typeof get;
};
export {};
//# sourceMappingURL=httpsRequest.d.ts.map