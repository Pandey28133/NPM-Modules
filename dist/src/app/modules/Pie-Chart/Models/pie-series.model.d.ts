/**
 * <copyright file='data-source.ts' company='Markem-Imaje'>
 * Copyright (c) 2018 Markem-Imaje. All rights reserved.
 * </copyright>
 */
import { PieDataSource } from './pie-data-source.model';
export interface PieSeries {
    DataSource: PieDataSource[];
    color?: string[];
    PieName?: string;
}
