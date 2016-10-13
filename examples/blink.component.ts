import { Component, OnInit } from '@angular/core';

export let _pinName = '13'; // This is the LED pin on Arduino

export function setPinName(value: string) {
  _pinName = value;
}

@Component({
  template: `
    <iot-led [pin]="pinName" [state]="ledState"></iot-led>
  `
})
export class BlinkComponent implements OnInit {
  ledState: boolean = false;
  pinName = _pinName;

  ngOnInit() {
    setInterval(() => {
      this.ledState = !this.ledState;
    }, 500);
  }
}
