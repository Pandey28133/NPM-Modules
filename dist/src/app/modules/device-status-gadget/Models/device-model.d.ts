/**
 * <copyright file='device-model.ts' company='Markem-Imaje'>
 * Copyright (c) 2018 Markem-Imaje. All rights reserved.
 * </copyright>
 */
export declare class DeviceProperties {
    Value: string;
    DisplayName: string;
}
export declare class DeviceImageProperties {
    Height: string;
    Width: string;
}
export declare enum Status {
    Unknown = 0,
    Disable = 1,
    OK = 2,
    Standby = 3,
    Warning = 4,
    Error = 5,
    Disconnected = 6,
}
