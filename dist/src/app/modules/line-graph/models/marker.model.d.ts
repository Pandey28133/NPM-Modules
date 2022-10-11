import { DataLabelSettingsModel } from '@syncfusion/ej2-angular-charts';
/**
 * <copyright file='marker.ts' company='Markem-Imaje'>
 * Copyright (c) 2018 Markem-Imaje. All rights reserved.
 * </copyright>
 */
export interface Marker {
    visible?: boolean;
    height?: number;
    width?: number;
    fill?: string;
    dataLabel?: DataLabelSettingsModel;
}
