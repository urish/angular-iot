/**
 * A Blink example for Angular IoT. Connect it to an Arduino board with
 * a Firmata firmware to start linking the built-in LED (connected to pin
 * number 13).
 *
 * You may need to specify your serial port name by settings the environment
 * variable SERIAL_PORT.
 *
 * Copyright (C) 2016, Uri Shaked. License: MIT.
 */

import 'angular2-universal-polyfills';

import { Component, NgModule, OnInit } from '@angular/core';
import { bootstrap, IotModule } from '../src/index';
import { Board } from 'johnny-five';

@Component({
  template: `
    <iot-led pin="13" [state]="ledState"></iot-led>
  `
})
class IotBlinkComponent implements OnInit {
  private ledState: boolean = false;

  ngOnInit() {
    setInterval(() => {
      this.ledState = !this.ledState;
    }, 500);
  }
}

@NgModule({
  imports: [IotModule],
  declarations: [IotBlinkComponent],
  bootstrap: [IotBlinkComponent]
})
class IotBlinkApp {
}

const board = new Board({
  port: process.env.SERIAL_PORT
});

board.on('ready', () => {
  bootstrap(IotBlinkApp);
});
