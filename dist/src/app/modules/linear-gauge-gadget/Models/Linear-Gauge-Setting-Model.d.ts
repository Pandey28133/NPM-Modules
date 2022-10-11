/**
 * <copyright file='Linear-Gauge-Setting-Model.ts' company='Markem-Imaje'>
 * Copyright (c) 2019 Markem-Imaje. All rights reserved.
 * </copyright>
 */
import { ThresholdConfig } from './ThresholdConfig';
export declare class LinearGaugeSetting {
    Title: string;
    Tooltip: object;
    Major: object;
    Minor: object;
    MinimumAxisValue: Number;
    MaximumAxisValue: Number;
    PointerColor: string;
    PointerOffsetValue: Number;
    PointerHeight: string;
    PointerWidth: string;
    BarPointerOffsetValue: Number;
    Ranges: ThresholdConfig[];
}
