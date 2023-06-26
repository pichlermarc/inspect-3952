interface ErrorLikeConstructor {
    new (): Error;
}
/**
 * Node.js v8.x and browser compatible `assert.rejects`.
 */
export declare function assertRejects(actual: any, expected: RegExp | ErrorLikeConstructor): Promise<void>;
export {};
//# sourceMappingURL=test-utils.d.ts.map