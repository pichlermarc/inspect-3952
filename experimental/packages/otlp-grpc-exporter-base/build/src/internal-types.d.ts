import type * as protobuf from 'protobufjs';
export interface ExportType<T, R = T & {
    toJSON: () => unknown;
}> {
    encode(message: T, writer?: protobuf.Writer): protobuf.Writer;
    decode(reader: protobuf.Reader | Uint8Array, length?: number): R;
}
//# sourceMappingURL=internal-types.d.ts.map