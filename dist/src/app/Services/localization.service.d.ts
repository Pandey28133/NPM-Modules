import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ResourceManagerService } from '../Services/resource-manager.service';
export declare class LocalizationService {
    private http;
    private resourceManager;
    private locale;
    uiLanguage: string;
    constructor(http: HttpClient, resourceManager: ResourceManagerService);
    getAllTranslatedStrings(): Observable<boolean>;
    private bindResources(callBackSubject?);
}
