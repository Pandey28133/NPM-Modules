/**
 * <copyright file='line-series.ts' company='Markem-Imaje'>
 * Copyright (c) 2018 Markem-Imaje. All rights reserved.
 * </copyright>
 */
import { DataSource } from './data-source.model';
import { Marker } from './marker.model';
export interface LineSeries {
    DataSource: DataSource[];
    LineName?: string;
    FillColor?: string;
    Marker?: Marker;
    LineWidth?: number;
}
