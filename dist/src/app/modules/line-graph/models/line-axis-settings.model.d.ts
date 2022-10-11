import { MajorTickLinesModel, MinorGridLinesModel, AxisLineModel, StripLineSettingsModel } from '@syncfusion/ej2-angular-charts';
/**
 * <copyright file='line-axis-settings.model.ts' company='Markem-Imaje'>
 * Copyright (c) 2018 Markem-Imaje. All rights reserved.
 * </copyright>
 */
export declare class LineAxisSettings {
    valueType?: string;
    labelFormat?: string;
    intervalType?: string;
    title?: string;
    rangePadding?: string;
    minimum?: any;
    maximum?: any;
    interval?: number;
    edgeLabelPlacement?: string;
    lineStyle?: AxisLineModel;
    majorTickLines?: MajorTickLinesModel;
    minorTickLines?: MinorGridLinesModel;
    stripLines?: StripLineSettingsModel[];
}
