export declare const validAttributes: {
    string: string;
    number: number;
    bool: boolean;
    'array<string>': string[];
    'array<number>': number[];
    'array<bool>': boolean[];
};
export declare const invalidAttributes: {
    object: {
        foo: string;
    };
    'non-homogeneous-array': (string | number)[];
    '': string;
};
export declare function assertAssignable<T>(val: T): asserts val is T;
//# sourceMappingURL=util.d.ts.map