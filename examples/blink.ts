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

import { Board } from 'johnny-five';
import { bootstrap } from '../src/index';

import { BlinkApp } from './blink.app';

const board = new Board({
  port: process.env.SERIAL_PORT
});

board.on('ready', () => {
  bootstrap(BlinkApp);
});
