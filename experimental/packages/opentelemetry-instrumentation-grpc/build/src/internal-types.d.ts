import { Span } from '@opentelemetry/api';
import type * as grpcJsTypes from '@grpc/grpc-js';
export declare type metadataCaptureType = {
    client: {
        captureRequestMetadata: (span: Span, metadata: grpcJsTypes.Metadata) => void;
        captureResponseMetadata: (span: Span, metadata: grpcJsTypes.Metadata) => void;
    };
    server: {
        captureRequestMetadata: (span: Span, metadata: grpcJsTypes.Metadata) => void;
        captureResponseMetadata: (span: Span, metadata: grpcJsTypes.Metadata) => void;
    };
};
//# sourceMappingURL=internal-types.d.ts.map