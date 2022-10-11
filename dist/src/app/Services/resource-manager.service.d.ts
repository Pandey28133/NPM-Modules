export declare class ResourceManagerService {
    private resource;
    private deafultresource;
    format(message: string, args: any[]): any;
    setLangulage(strResource: {
        [index: string]: string;
    }): void;
    setDefaultLangulage(enResource: {
        [index: string]: string;
    }): void;
    getString(key: string, args?: any[]): string;
    private getDefaultString(key, args?);
}
