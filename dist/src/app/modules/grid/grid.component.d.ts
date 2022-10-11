/**
 * <copyright file='CustomGridComponent.ts' company='Markem-Imaje'>
 * Copyright (c) 2018 Markem-Imaje. All rights reserved.
 * </copyright>
 */
import { EventEmitter, OnInit } from '@angular/core';
import { GridComponent, PageSettingsModel, SortSettings } from '@syncfusion/ej2-ng-grids';
import { GridColumnModel } from './models/grid-column-model';
import { GridLocalizationService } from '../../Services/grid-localisation-service';
export declare class CustomGridComponent implements OnInit {
    private gridLocalizationService;
    isSortable: boolean;
    isPaging: boolean;
    isFilterable: boolean;
    isResizing: boolean;
    /**
     * Grid Height
     */
    gridHeight: string;
    /**
    * Grid Width
    */
    gridWidth: string;
    /**
    * Grid Filter Settings.
    */
    filterSettings: {
        type: string;
        ignoreAccent: boolean;
    };
    /**
     * Grid Selection Mode
     */
    selectionMode: {
        mode: string;
        cellSelectionMode: string;
        type: string;
    };
    /**
    * Grid Page Settings
    */
    pageSettings: PageSettingsModel;
    /**
    * Grid sort Settings
    */
    sortSettings: SortSettings;
    /**
   * Array to hold columns
   */
    columnModel: GridColumnModel[];
    /**
     * Default Font Size
     */
    fontSize: number;
    /**
   * Views Grid Reference.
   */
    Grid: GridComponent;
    /**
    * Datasource for the Grid
    */
    dataSource: Object[];
    /**
    * Gets the selected Row Objects data
    */
    getSelectedRowObject: EventEmitter<{}>;
    /** Gets the data bound */
    dataBoundEvent: EventEmitter<{}>;
    isLocalize: boolean;
    ngOnInit(): void;
    constructor(gridLocalizationService: GridLocalizationService);
    /**
     * Perform Sort on grid Load
     */
    Load(): void;
    /** Emit the databound  */
    DataBound(): void;
    /** set the 1st row selected */
    SetRows(indexes: number[]): void;
    /**
   * On Row Selection it will return the code.
   */
    RowSelectionChanged: () => void;
    UpdateGrid: () => void;
    /**
   * Sync Fusion Override method for solving Auto Fit Column Issue.
   * This will be provided a different patch.
   * Help Recieved from Synfusion team.
   */
    SyncFusionResizeOverride(): void;
    /**
     * Sync Fusion Override method for prevent toggle behaviour on single selection.
     * This will be provided a different patch.
     * Help Recieved from Synfusion team.
     */
    SyncFusionSelectionOverride(): void;
}
