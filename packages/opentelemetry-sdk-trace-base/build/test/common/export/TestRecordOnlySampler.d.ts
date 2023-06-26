import { Sampler, SamplingResult } from '../../../src';
/** Sampler that always records but doesn't sample spans. */
export declare class TestRecordOnlySampler implements Sampler {
    shouldSample(): SamplingResult;
    toString(): string;
}
//# sourceMappingURL=TestRecordOnlySampler.d.ts.map