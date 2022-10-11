import { ResourceManagerService } from './resource-manager.service';
import { LocalizationService } from './localization.service';
export declare class GridLocalizationService {
    private resourceManagerService;
    private localizationService;
    private localisedText;
    constructor(resourceManagerService: ResourceManagerService, localizationService: LocalizationService);
    LoadResource(): void;
    /**
     * Set Calendar language and load required language JSON
     * @param locale - Input language locale
     */
    private SetLanguage(locale);
}
