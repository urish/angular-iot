import {Type, Provider, ComponentRef, PLATFORM_DIRECTIVES, provide} from '@angular/core';
import {Bootloader} from 'angular2-universal';

import {IotLED} from './components/LedComponent';
import {IotButton} from './components/ButtonComponent';

export const IOT_DIRECTIVES = [
  IotButton,
  IotLED
];

export const IOT_PROVIDERS = [
  provide(PLATFORM_DIRECTIVES, { useValue: IOT_DIRECTIVES, multi: true })
];

export function bootstrap(appComponentType: any, appProviders: Array<Type | Provider | any | any[]> = []): Promise<ComponentRef<any>> {
  let combinedProviders = [
    IOT_PROVIDERS,
    ...appProviders
  ];
  const bootloader = Bootloader.create({
    providers: combinedProviders
  });
  return bootloader.bootstrap(appComponentType);
}
