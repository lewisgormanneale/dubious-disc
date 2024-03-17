import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'dd-switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent implements OnInit {
  @Input() checked: boolean = false;
  @Input() label?: string;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  static idCounter = 0;
  id: string = '';

  ngOnInit() {
    this.id = `toggle-${SwitchComponent.idCounter++}`;
  }

  toggleSwitch(): void {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
