/**
 * <copyright file='DeviceStatusGadgetComponent.ts' company='Markem-Imaje'>
 * Copyright (c) 2018 Markem-Imaje. All rights reserved.
 * </copyright>
 */
import { OnInit, OnChanges } from '@angular/core';
import { Status, DeviceProperties, DeviceImageProperties } from '../device-status-gadget/Models/device-model';
export declare class DeviceStatusGadgetComponent implements OnInit, OnChanges {
    /** Input for renderMode of DeviceStatus Gadget */
    private _renderMode;
    RenderMode: string;
    /**Device Name Input which will be use to get the Device Information to render the Gadget */
    DeviceName: string;
    /**Device Status Input which will be use to show the Device Status information by color like conntected(Green)*/
    DeviceStatus: Status;
    /**Device Icon URL Input which will be use to show the Device Image while render the Gadget */
    DeviceImageURL: string;
    DeviceStatusIconColor: string;
    DeviceProperties: DeviceProperties[];
    DeviceImageProperties?: DeviceImageProperties;
    /**
     * Device Status Border Width
     */
    DeviceStatusBorderWidth: string;
    /**
     * Flag to determine if Mobile Mode properties made visible
     */
    IsMobilePropertiesVisible: boolean;
    /**
     * Border Style having thickness, color and style
     */
    borderStyle: string;
    /**
     * Default Font Size
     */
    FontSize: number;
    /**
     * Class to identify full width header
     */
    HeaderWidthPercentage: {};
    /**
     * Oninit life cycle hook
    */
    ngOnInit(): void;
    /**
     * Onchange life cycle hook
    */
    ngOnChanges(): void;
    private setDeviceStatusIconColor(status);
}
