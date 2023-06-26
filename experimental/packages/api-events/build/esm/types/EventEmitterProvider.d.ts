import { EventEmitter } from './EventEmitter';
import { EventEmitterOptions } from './EventEmitterOptions';
/**
 * A registry for creating named {@link EventEmitter}s.
 */
export interface EventEmitterProvider {
    /**
     * Returns an EventEmitter, creating one if one with the given name, version, and
     * schemaUrl pair is not already created.
     *
     * @param name The name of the event emitter or instrumentation library.
     * @param domain The domain for events created by the event emitter.
     * @param version The version of the event emitter or instrumentation library.
     * @param options The options of the event emitter or instrumentation library.
     * @returns EventEmitter An event emitter with the given name and version.
     */
    getEventEmitter(name: string, domain: string, version?: string, options?: EventEmitterOptions): EventEmitter;
}
//# sourceMappingURL=EventEmitterProvider.d.ts.map