// src/main.single-spa.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { singleSpaAngular, SingleSpaAngularOpts } from 'single-spa-angular';

import { LifeCycles } from 'single-spa';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { SINGLE_SPA_PROPS, SingleSpaExtraProps } from './app/single-spa-props';


const lifecycles = singleSpaAngular({
  bootstrapApplication,
  rootComponent: AppComponent,
  appConfig,
  propsInjectionToken: SINGLE_SPA_PROPS,
});

export const bootstrap = (lifecycles as any).bootstrap;
export const mount = (lifecycles as any).mount;
export const unmount = (lifecycles as any).unmount;
