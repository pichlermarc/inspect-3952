/// <reference types="node" />
import * as http from 'http';
import { URL } from 'url';
declare type GetResult = Promise<{
    data: string;
    statusCode: number | undefined;
    resHeaders: http.IncomingHttpHeaders;
    reqHeaders: http.OutgoingHttpHeaders;
    method: string | undefined;
}>;
declare function get(input: string | URL, options?: http.RequestOptions): GetResult;
declare function get(input: http.RequestOptions): GetResult;
export declare const httpRequest: {
    get: typeof get;
};
export {};
//# sourceMappingURL=httpRequest.d.ts.map