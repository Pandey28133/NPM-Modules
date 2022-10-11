/**
 * <copyright file='linear-gauge-gadget.component.ts' company='Markem-Imaje'>
 * Copyright (c) 2019 Markem-Imaje. All rights reserved.
 * </copyright>
 */
import { OnInit, OnChanges } from '@angular/core';
import { LinearGaugeSetting } from './Models/Linear-Gauge-Setting-Model';
export declare class LinearGaugeGadgetComponent implements OnInit, OnChanges {
    /** Input for Linear gauge as Linear Gauge Setting model which will have all the properties */
    LinearGaugeSetting: LinearGaugeSetting;
    /** Input for Linear gauge  as Pointer Value which will have current pointer value */
    PointerValue: number;
    /**
    * To set Default linear gauge Height
    */
    LinearGaugeHeight: string;
    /**
    * To set Default linear gauge Width
    */
    LinearGaugeWidth: string;
    /**
     * The font size for pointer value.
     */
    ValueFontSize: string;
    /**
    * To set Default linear gauge Bar pointer Width
    */
    LinearGaugeBarPointerWidth: string;
    /**
  * To set Default linear gauge Range start Width
  */
    RangeStartWidth: string;
    /**
  * To set Default linear gauge Range end Width
  */
    RangeEndWidth: string;
    /**
   * To set AnnotationContent
   */
    AnnotationContent: string;
    /**
   * zIndex value to display annotation on top
   */
    zIndex: number;
    /**
   * To set Linear Gauge Line setting
   */
    LinearGaugeLineSetting: object;
    constructor();
    /**
     * Oninit life cycle hook
    */
    ngOnInit(): void;
    /**
     * Onchange life cycle hook
     * Called on property change.
    */
    ngOnChanges(): void;
}
