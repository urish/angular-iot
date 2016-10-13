import { Component, NgModule, OnInit } from '@angular/core';
import { IotModule } from '../src/index';

import { BlinkComponent } from './blink.component';

@NgModule({
  imports: [IotModule],
  declarations: [BlinkComponent],
  bootstrap: [BlinkComponent]
})
export class BlinkApp {
}
