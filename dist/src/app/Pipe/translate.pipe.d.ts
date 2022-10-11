import { PipeTransform } from '@angular/core';
import { ResourceManagerService } from '../Services/resource-manager.service';
export declare class TranslatePipe implements PipeTransform {
    private resourceManager;
    constructor(resourceManager: ResourceManagerService);
    transform(value: any, args?: any[]): any;
}
