# WebComponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Steps to Install ng-packagr

Run `npm install ng-packagr --save-dev`.  [Version Used - "ng-packagr": "^2.0.0-rc.0"]
Add 'ng-package.json' and 'public_api.ts' files in the application.
Include exported module in 'public_api.ts'.
Add "packagr": "ng-packagr -p ng-package.json" in package.json
Run `npm run packagr`. Creates dist folder in application
Run `cd dist`
Run `npm pack`. Creates a file in the root of the dist folder called Application-Name-0.0.0.tgz file
Follow this article for more information(https://medium.com/@nikolasleblanc/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e)

## Steps to Packaging the library Module

Include module needed to be packaged in 'public_api.ts'.
In terminal, run `npm run packagr`.
change directory to dist. `cd dist`
Run `npm pack`

## Consuming shared package in client application

Install package by giving the path of the shared package
eg: `npm install W:/ngw_de0157/CoLOS_6_2/WebComponents/dist/mi-webcomponents-0.0.0.tgz`
import the required module in app.module.ts
eg: import { LineBarIndicatorModule } from 'mi-webcomponents';

##  localization samples

<!-- <div *ngIf="localizationService.Ready">
   string: {{'String_OEE'|translate}}
   parameters: {{'test'|translate:['1','5']}}
</div> -->

