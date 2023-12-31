import { MetricOptions, ValueType } from '@opentelemetry/api';
import { View } from './view/View';
/**
 * Supported types of metric instruments.
 */
export declare enum InstrumentType {
    COUNTER = "COUNTER",
    HISTOGRAM = "HISTOGRAM",
    UP_DOWN_COUNTER = "UP_DOWN_COUNTER",
    OBSERVABLE_COUNTER = "OBSERVABLE_COUNTER",
    OBSERVABLE_GAUGE = "OBSERVABLE_GAUGE",
    OBSERVABLE_UP_DOWN_COUNTER = "OBSERVABLE_UP_DOWN_COUNTER"
}
/**
 * An interface describing the instrument.
 */
export interface InstrumentDescriptor {
    readonly name: string;
    readonly description: string;
    readonly unit: string;
    readonly type: InstrumentType;
    readonly valueType: ValueType;
}
export declare function createInstrumentDescriptor(name: string, type: InstrumentType, options?: MetricOptions): InstrumentDescriptor;
export declare function createInstrumentDescriptorWithView(view: View, instrument: InstrumentDescriptor): InstrumentDescriptor;
export declare function isDescriptorCompatibleWith(descriptor: InstrumentDescriptor, otherDescriptor: InstrumentDescriptor): boolean;
//# sourceMappingURL=InstrumentDescriptor.d.ts.map