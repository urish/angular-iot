import {Type, Provider, ComponentRef, PLATFORM_DIRECTIVES, provide} from 'angular2/core';
import {bootstrap as bootstrapUniversal} from 'angular2-universal';
import {ORIGIN_URL} from 'angular2-universal/common';

import {IotLED} from './components/LedComponent';
import {IotButton} from './components/ButtonComponent';

export const IOT_DIRECTIVES = [
  IotButton,
  IotLED
];

export const IOT_PROVIDERS = [
  provide(PLATFORM_DIRECTIVES, { useValue: IOT_DIRECTIVES, multi: true }),
  provide(ORIGIN_URL, { useValue: null })
];

export function bootstrap(appComponentType: any, appProviders: Array<Type | Provider | any | any[]> = []): Promise<ComponentRef> {
  let combinedProviders = [
    IOT_PROVIDERS,
    ...appProviders
  ];
  return bootstrapUniversal(appComponentType, combinedProviders);
}
