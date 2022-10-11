import { OnInit } from '@angular/core';
export declare class PreviewDeviceGadgetComponent implements OnInit {
    /**
     * Image URL
     */
    ImageUrl: string;
    /**
     * Is device to be refreshed
     */
    private _isImageRefresh;
    /**
   * Is device to be refreshed
   */
    IsImageRefresh: boolean;
    /**
     * Image Width
     */
    Width: string;
    /**
     * Image Height
     */
    Height: string;
    constructor();
    /**
     * Initialization
     */
    ngOnInit(): void;
}
