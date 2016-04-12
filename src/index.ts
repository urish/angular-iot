import {Type, Provider, ComponentRef, PLATFORM_DIRECTIVES, provide} from 'angular2/core';
import {bootstrap as bootstrapUniversal} from 'angular2-universal-preview';

import {IotLED} from './components/LedComponent';
import {IotButton} from './components/ButtonComponent';

export const IOT_DIRECTIVES = [
  IotButton,
  IotLED
];

export const IOT_PROVIDERS = [
  provide(PLATFORM_DIRECTIVES, { useValue: IOT_DIRECTIVES, multi: true })
];

export function bootstrap(appComponentType: any, appProviders: Array<Type | Provider | any | any[]> = []): Promise<ComponentRef> {
  let combinedProviders = [
    IOT_PROVIDERS,
    ...appProviders
  ];
  return bootstrapUniversal(appComponentType, combinedProviders);
}
