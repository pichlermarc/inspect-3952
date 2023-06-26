export declare const validAttributes: {
    string: string;
    number: number;
    bool: boolean;
    'array<string>': string[];
    'array<number>': number[];
    'array<bool>': boolean[];
    object: {
        bar: string;
    };
};
export declare const invalidAttributes: {
    object: {};
    'non-homogeneous-array': (string | number)[];
    '': string;
};
//# sourceMappingURL=utils.d.ts.map