/**
 * <copyright file='pie-chart.component.ts' company='Markem-Imaje'>
 * Copyright (c) 2018 Markem-Imaje. All rights reserved.
 * </copyright>
 */
import { PieSeries } from './Models/pie-series.model';
import { AccumulationChartComponent, LegendSettingsModel, AccumulationDataLabelSettingsModel, LegendPosition } from '@syncfusion/ej2-angular-charts';
import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class PieChartComponent implements OnInit, OnChanges {
    /** Title of pie chart */
    title: string;
    /** Pie series array */
    pieSeries: PieSeries[];
    isLegendVisible: boolean;
    positionOfLegend: LegendPosition;
    height: string;
    width: string;
    legendSettings: LegendSettingsModel;
    /** The data label */
    datalabel: AccumulationDataLabelSettingsModel;
    heightProperty: string;
    widthProperty: string;
    animation: {
        enable: boolean;
    };
    /**
     * Holds text style and size for each labels
     */
    fontSettings: Object;
    /**
   * Title Text Ratio
   */
    private TitleTextRatio;
    /**
     * Legend Text Ratio
     */
    private LegendTextRatio;
    /**
     * Axis Text ratio
     */
    private ValueTextRatio;
    FontSize: string;
    BackgroundColor: string;
    pieChart: AccumulationChartComponent;
    tooltip: Object;
    /**
     * The constructor
     */
    constructor();
    /**
     * Onchanges life cycle hook
    */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Oninit life cycle hook
    */
    ngOnInit(): void;
    /**
     * Set Legend Setting for chart
    */
    private SetLegendSetting;
    /**
     * Set data lable Setting for chart
    */
    private SetDataLable;
    /**
    * Set Height for chart
    */
    private SetHeight;
    /**
    * Refresh updated line series data
    */
    private RedrawSeries;
    /**
     * Set fonts for all labels
     */
    private SetFontSettings;
}
