import { OnInit, SimpleChanges } from '@angular/core';
export declare class OverlayComponent implements OnInit {
    ShowOverlay: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private showOverlay();
    private hideOverlay();
}
