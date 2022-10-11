/**
 * <copyright file='LineBarIndicatorComponent.ts' company='Markem-Imaje'>
 * Copyright (c) 2018 Markem-Imaje. All rights reserved.
 * </copyright>
 */
import { OnInit, OnChanges, SimpleChanges, ElementRef, AfterViewInit } from '@angular/core';
export declare class LineBarIndicatorComponent implements OnChanges, OnInit, AfterViewInit {
    /** Label name */
    label: string;
    /** Label name visibilty on top of bar*/
    isValueVisibleOnTop: boolean;
    /** Label name Orientation to Vertical */
    isLabelOrientationVertical: boolean;
    value: number;
    thresholdValueHigh: number;
    thresholdValueLow: number;
    rangeLow: number;
    rangeHigh: number;
    colorUp: string;
    colorBetween: string;
    colorDown: string;
    isThresholdLineVisible: boolean;
    isThresholdLineLowVisible: boolean;
    unit: string;
    barHeightPercentage: number;
    /**
     * Font size for the value poperty.
     */
    ValueFontSize: any;
    calculatedRange1: number;
    calculatedRange2: number;
    rectangleColor: string;
    calculatedWidth: number;
    heightOfRectEmptyArea: number;
    heightOfRectFilledArea: number;
    /** threshold Width */
    thresholdDivWidth: string;
    /** reversed text used for vertical label */
    reversedLabel: any;
    locale: string;
    /**
     * Handle Multi Line Labels for vertical alignment
     * split it on Space and show lines float left.
     */
    IsMultiLineLabel: boolean;
    lineHeight: number;
    lineBarRectangle: ElementRef;
    topValueSection: ElementRef;
    middleBarSection: ElementRef;
    bottomLabelSection: ElementRef;
    bottomValueSection: ElementRef;
    barcontainersection: ElementRef;
    /** Bar Graph calculated height */
    barGraphHeight: number;
    /** Holds the words for vertical alignment */
    verticalWordsArray: string[][];
    onWindowResize(): void;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     * Set Indicator background color based on conditons.
     */
    private SetColor;
    /**
     * Calculate margin height for threshold lines.
     */
    private CalculateThresholdRange();
    /**
     * Calculate the margin height for line to be drawn in rectangle bar.
     */
    private GetCalculatedRange;
    /**
     * Calculate width for threshold line.
     */
    private CalculateLineWidth;
    /**
     * Calculated heigth of rect filled area
     */
    private CalculatedHeigthRectFilledArea;
    /**
     * Sets width for Threshold Division Area
     */
    private SetThresholdDivAreaWidth;
    /**
     * Reverse the text of label
     * @param text string as input
     */
    private Reverse(text);
}
