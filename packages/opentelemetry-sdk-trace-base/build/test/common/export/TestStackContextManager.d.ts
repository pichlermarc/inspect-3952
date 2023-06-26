import { ContextManager, Context } from '@opentelemetry/api';
/**
 * A test-only ContextManager that uses an in-memory stack to keep track of
 * the active context.
 *
 * This is not intended for advanced or asynchronous use cases.
 */
export declare class TestStackContextManager implements ContextManager {
    private _contextStack;
    active(): Context;
    with<A extends unknown[], F extends (...args: A) => ReturnType<F>>(context: Context, fn: F, thisArg?: ThisParameterType<F>, ...args: A): ReturnType<F>;
    bind<T>(context: Context, target: T): T;
    enable(): this;
    disable(): this;
}
//# sourceMappingURL=TestStackContextManager.d.ts.map