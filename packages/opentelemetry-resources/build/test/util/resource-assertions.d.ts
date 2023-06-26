import { IResource } from '../../src/IResource';
/**
 * Test utility method to validate a cloud resource
 *
 * @param resource the Resource to validate
 * @param validations validations for the resource attributes
 */
export declare const assertCloudResource: (resource: IResource, validations: {
    provider?: string;
    accountId?: string;
    region?: string;
    zone?: string;
}) => void;
/**
 * Test utility method to validate a container resource
 *
 * @param resource the Resource to validate
 * @param validations validations for the resource attributes
 */
export declare const assertContainerResource: (resource: IResource, validations: {
    name?: string;
    id?: string;
    imageName?: string;
    imageTag?: string;
}) => void;
/**
 * Test utility method to validate a host resource
 *
 * @param resource the Resource to validate
 * @param validations validations for the resource attributes
 */
export declare const assertHostResource: (resource: IResource, validations: {
    hostName?: string;
    id?: string;
    name?: string;
    hostType?: string;
    imageName?: string;
    imageId?: string;
    imageVersion?: string;
}) => void;
/**
 * Test utility method to validate a K8s resource
 *
 * @param resource the Resource to validate
 * @param validations validations for the resource attributes
 */
export declare const assertK8sResource: (resource: IResource, validations: {
    clusterName?: string;
    namespaceName?: string;
    podName?: string;
    deploymentName?: string;
}) => void;
/**
 * Test utility method to validate a telemetry sdk resource
 *
 * @param resource the Resource to validate
 * @param validations validations for the resource attributes
 */
export declare const assertTelemetrySDKResource: (resource: IResource, validations: {
    name?: string;
    language?: string;
    version?: string;
}) => void;
/**
 * Test utility method to validate a service resource
 *
 * @param resource the Resource to validate
 * @param validations validations for the resource attributes
 */
export declare const assertServiceResource: (resource: IResource, validations: {
    name: string;
    instanceId: string;
    namespace?: string;
    version?: string;
}) => void;
/**
 * Test utility method to validate a process / browser resources
 *
 * @param resource the Resource to validate
 * @param validations validations for the resource attributes
 */
export declare const assertResource: (resource: IResource, validations: {
    pid?: number;
    name?: string;
    command?: string;
    commandArgs?: string[];
    executablePath?: string;
    owner?: string;
    version?: string;
    runtimeName?: string;
    runtimeDescription?: string;
}) => void;
export declare const assertWebEngineResource: (resource: IResource, validations: {
    name?: string;
    version?: string;
    description?: string;
}) => void;
/**
 * Test utility method to validate an empty resource
 *
 * @param resource the Resource to validate
 */
export declare const assertEmptyResource: (resource: IResource) => void;
//# sourceMappingURL=resource-assertions.d.ts.map