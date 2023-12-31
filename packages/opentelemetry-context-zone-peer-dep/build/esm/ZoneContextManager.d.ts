import { Context, ContextManager } from '@opentelemetry/api';
import { TargetWithEvents } from './types';
/**
 * ZoneContextManager
 * This module provides an easy functionality for tracing action between asynchronous operations in web.
 * It was not possible with standard [StackContextManager]{@link https://github.com/open-telemetry/opentelemetry-js/blob/main/packages/opentelemetry-sdk-trace-web/src/StackContextManager.ts}.
 * It heavily depends on [zone.js]{@link https://www.npmjs.com/package/zone.js}.
 * It stores the information about context in zone. Each Context will have always new Zone;
 * It also supports binding a certain Span to a target that has "addEventListener" and "removeEventListener".
 * When this happens a new zone is being created and the provided Span is being assigned to this zone.
 */
export declare class ZoneContextManager implements ContextManager {
    /**
     * whether the context manager is enabled or not
     */
    private _enabled;
    /**
     * Helps to create a unique name for the zones - part of zone name
     */
    private _zoneCounter;
    /**
     * Returns the active context from certain zone name
     * @param activeZone
     */
    private _activeContextFromZone;
    /**
     * @param context A context (span) to be executed within target function
     * @param target Function to be executed within the context
     */
    private _bindFunction;
    /**
     * @param context A context (span) to be bind to target
     * @param obj target object on which the listeners will be patched
     */
    private _bindListener;
    /**
     * Creates a new unique zone name
     */
    private _createZoneName;
    /**
     * Creates a new zone
     * @param zoneName zone name
     * @param context A context (span) to be bind with Zone
     */
    private _createZone;
    /**
     * Returns the active zone
     */
    private _getActiveZone;
    /**
     * Patches addEventListener method
     * @param target any target that has "addEventListener" method
     * @param original reference to the patched method
     * @param [context] context to be bind to the listener
     */
    private _patchAddEventListener;
    /**
     * Patches removeEventListener method
     * @param target any target that has "removeEventListener" method
     * @param original reference to the patched method
     */
    private _patchRemoveEventListener;
    /**
     * Returns the active context
     */
    active(): Context;
    /**
     * Binds a the certain context or the active one to the target function and then returns the target
     * @param context A context (span) to be bind to target
     * @param target a function or event emitter. When target or one of its callbacks is called,
     *  the provided context will be used as the active context for the duration of the call.
     */
    bind<T>(context: Context, target: T | TargetWithEvents): T;
    /**
     * Disable the context manager (clears all the contexts)
     */
    disable(): this;
    /**
     * Enables the context manager and creates a default(root) context
     */
    enable(): this;
    /**
     * Calls the callback function [fn] with the provided [context].
     *     If [context] is undefined then it will use the active context.
     *     The context will be set as active
     * @param context A context (span) to be called with provided callback
     * @param fn Callback function
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */
    with<A extends unknown[], F extends (...args: A) => ReturnType<F>>(context: Context | null, fn: F, thisArg?: ThisParameterType<F>, ...args: A): ReturnType<F>;
}
//# sourceMappingURL=ZoneContextManager.d.ts.map