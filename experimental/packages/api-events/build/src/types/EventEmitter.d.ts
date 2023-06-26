import { Event } from './Event';
export interface EventEmitter {
    /**
     * Emit an event. This method should only be used by instrumentations emitting events.
     *
     * @param event
     */
    emit(event: Event): void;
}
//# sourceMappingURL=EventEmitter.d.ts.map