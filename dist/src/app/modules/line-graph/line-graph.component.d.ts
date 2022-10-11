/**
 * <copyright file='line-graph.component.ts' company='Markem-Imaje'>
 * Copyright (c) 2018 Markem-Imaje. All rights reserved.
 * </copyright>
 */
import { ToolTip } from './models/tooltip.model';
import { LineSeries } from './models/line-series.model';
import { LineAxisSettings } from './models/line-axis-settings.model';
import { ChartComponent, LegendSettingsModel, ChartAreaModel } from '@syncfusion/ej2-angular-charts';
import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class LineGraphComponent implements OnInit, OnChanges {
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
    private AxisTextRatio;
    /** Title of graph */
    title: string;
    /** Line Series Array */
    lineSeries: LineSeries[];
    isLegendVisible: boolean;
    xAxisSettings: LineAxisSettings;
    yAxisSettings: LineAxisSettings;
    toolTip: ToolTip;
    height: string;
    FontSize: string;
    /**
     * Sets the Legend Position
     */
    LegendPosition: string;
    legendSettings: LegendSettingsModel;
    primaryXAxis: LineAxisSettings;
    primaryYAxis: LineAxisSettings;
    chartArea: ChartAreaModel;
    toolTipSettings: ToolTip;
    heightProperty: string;
    animation: {
        enable: boolean;
    };
    Chart: ChartComponent;
    /**
     * Holds text style and size for each labels
     */
    fontSettings: Object;
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
     * Set primary X-axis properties
     */
    private SetPrimaryXAxis;
    /**
     * Set primary Y-axis properties
     */
    private SetPrimaryYAxis;
    /**
     * Set tooltip format
     */
    private SetTooltip;
    /**
     * Set Legend Setting for chart
     */
    private SetLegendSetting;
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
    /**
     * Get Legend Alignment based on Input parameter set.
     */
    private GetLegendAlignment();
}
