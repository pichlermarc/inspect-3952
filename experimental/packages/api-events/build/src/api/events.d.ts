import { EventEmitterProvider } from '../types/EventEmitterProvider';
import { EventEmitter } from '../types/EventEmitter';
import { EventEmitterOptions } from '../types/EventEmitterOptions';
export declare class EventsAPI {
    private static _instance?;
    private constructor();
    static getInstance(): EventsAPI;
    setGlobalEventEmitterProvider(provider: EventEmitterProvider): EventEmitterProvider;
    /**
     * Returns the global event emitter provider.
     *
     * @returns EventEmitterProvider
     */
    getEventEmitterProvider(): EventEmitterProvider;
    /**
     * Returns a event emitter from the global event emitter provider.
     *
     * @returns EventEmitter
     */
    getEventEmitter(name: string, domain: string, version?: string, options?: EventEmitterOptions): EventEmitter;
    /** Remove the global event emitter provider */
    disable(): void;
}
//# sourceMappingURL=events.d.ts.map