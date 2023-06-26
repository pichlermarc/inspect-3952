import { Suite } from 'mocha';
import { IResource } from '@opentelemetry/resources';
export declare function describeBrowser(title: string, fn: (this: Suite) => void): void | Suite;
export declare const assertResource: (resource: IResource, validations: {
    platform?: string;
    brands?: string[];
    mobile?: boolean;
    language?: string;
    user_agent?: string;
}) => void;
/**
 * Test utility method to validate an empty resource
 *
 * @param resource the Resource to validate
 */
export declare const assertEmptyResource: (resource: IResource) => void;
//# sourceMappingURL=util.d.ts.map