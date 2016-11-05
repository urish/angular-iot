import {Component, OnChanges, Input} from '@angular/core';
import * as five from 'johnny-five';

@Component({
  selector: 'iot-led',
  template: '[LED on {{pin}} - {{state}}]'
})
export class IotLEDComponent implements OnChanges {
  @Input() pin: string | number;
  @Input() state: boolean;

  private _led: five.Led;

  ngOnChanges(changes) {
    if (this.pin && !this._led) {
      this._led = new five.Led(<number>this.pin);
    }
    if (this.state) {
      this._led.on();
    } else {
      this._led.off();
    }
  }
}
