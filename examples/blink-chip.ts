/**
 * A Blink example for Angular IoT. Run it on a C.H.I.P. board and
 * see the Status LED blinking.
 *
 * Prior to running this example, run the following command:
 *
 *     npm install chip-io
 *
 * You can get a C.H.I.P. board for 9$ from https://getchip.com
 *
 * Copyright (C) 2016, Uri Shaked. License: MIT.
 */

import 'angular2-universal-polyfills';

import { bootstrap } from '../src/index';
const { Board } = require('johnny-five');
var ChipIO = require('chip-io');

import { setPinName } from './blink.component';
import { BlinkModule } from './blink.module';

setPinName('STATUS');

const board = new Board({
    io: new ChipIO()
});

board.on('ready', () => {
  bootstrap(BlinkModule);
});
