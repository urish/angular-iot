import { Type, Provider, NgModule, NgModuleFactory, NgModuleRef } from '@angular/core';
import { NodeModule, NodeHttpModule, NodeJsonpModule } from 'angular2-universal/node/node';
import { platformUniversalDynamic } from 'angular2-universal/node/universal-module';

import { IotLED } from './components/led.component';
import { IotButton } from './components/button.component';

declare var Zone: any;

export const AngularIotDirectives = [IotButton, IotLED];

@NgModule({
  declarations: AngularIotDirectives,
  exports: AngularIotDirectives,
  imports: [
    NodeModule,
    NodeHttpModule, // Universal Http
    NodeJsonpModule // Universal JSONP
  ]
})
export class IotModule { }

export function bootstrap<M>(moduleType: Type<M>, extraProviders: Array<Provider | any | any[]> = []): Promise<NgModuleRef<M>> {
  const zone = Zone.current.fork({
    name: 'Angular 2 IoT',
    properties: {
      document: '<html><ng-component /></html>'
    }
  });
  return zone.run(() => {
    const platform = platformUniversalDynamic(extraProviders);
    return platform.bootstrapModule(moduleType);
  });
}

export function bootstrapFactory<M>(moduleFactory: NgModuleFactory<M>,
                                    extraProviders: Array<Provider | any | any[]> = []): Promise<NgModuleRef<M>> {
  const zone = Zone.current.fork({
    name: 'Angular 2 IoT',
    properties: {
      document: '<html><ng-component /></html>'
    }
  });
  return zone.run(() => {
    const platform = platformUniversalDynamic(extraProviders);
    return platform.bootstrapModuleFactory(moduleFactory);
  });
}
