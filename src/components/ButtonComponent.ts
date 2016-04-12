import {Component, OnInit, Input, Output, EventEmitter, NgZone} from 'angular2/core';
import * as five from 'johnny-five';

@Component({
  selector: 'iot-button',
  template: '[Button on {{pin}} - {{state}}]'
})
export class IotButton implements OnInit {
  @Input() pin: string | number;
  @Input() pullup: boolean = true;
  @Output() click = new EventEmitter();

  private _button: five.Button;

  constructor(private zone: NgZone) {
  }

  ngOnInit() {
    this._button = new five.Button({
      pin: this.pin,
      isPullup: this.pullup
    });
    
    this._button.on('down', () => {
      this.zone.run(() => {
        this.click.emit({
          pin: this.pin
        });
      });
    });
  }
}
