import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dd-switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent {
  @Input() checked: boolean = false;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleSwitch(): void {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
