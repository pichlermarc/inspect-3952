import { HrTime } from '@opentelemetry/api';
export interface SimpleTestObject {
    readonly propString: string;
    readonly propNumber: number;
    readonly propArray: number[];
}
export interface ComplexTestObject {
    readonly propString: string;
    readonly propNumber: number;
    readonly propFunction: () => SimpleTestObject;
    readonly propOptional?: string;
    readonly propTime: HrTime;
    readonly propObject: SimpleTestObject;
    readonly propArray: SimpleTestObject[];
    readonly propBoolean: boolean;
}
export declare const mockedComplexTestObject: ComplexTestObject;
export declare function ensureHeadersContain(actual: {
    [key: string]: string;
}, expected: {
    [key: string]: string;
}): void;
//# sourceMappingURL=testHelper.d.ts.map