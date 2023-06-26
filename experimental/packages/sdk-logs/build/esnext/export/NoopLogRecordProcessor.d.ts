import { LogRecordProcessor } from '../LogRecordProcessor';
import { ReadableLogRecord } from './ReadableLogRecord';
export declare class NoopLogRecordProcessor implements LogRecordProcessor {
    forceFlush(): Promise<void>;
    onEmit(_logRecord: ReadableLogRecord): void;
    shutdown(): Promise<void>;
}
//# sourceMappingURL=NoopLogRecordProcessor.d.ts.map