/// <reference types="node" />
import { Stream } from 'stream';
export declare class MockedResponse extends Stream {
    private _code;
    private _msg?;
    constructor(_code: number, _msg?: string | undefined);
    send(data: string): void;
    get statusCode(): number;
    get statusMessage(): string | undefined;
}
//# sourceMappingURL=nodeHelpers.d.ts.map