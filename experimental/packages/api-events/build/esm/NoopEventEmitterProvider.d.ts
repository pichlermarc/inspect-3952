import { EventEmitterProvider } from './types/EventEmitterProvider';
import { EventEmitter } from './types/EventEmitter';
import { EventEmitterOptions } from './types/EventEmitterOptions';
export declare class NoopEventEmitterProvider implements EventEmitterProvider {
    getEventEmitter(_name: string, _domain: string, _version?: string | undefined, _options?: EventEmitterOptions | undefined): EventEmitter;
}
export declare const NOOP_EVENT_EMITTER_PROVIDER: NoopEventEmitterProvider;
//# sourceMappingURL=NoopEventEmitterProvider.d.ts.map