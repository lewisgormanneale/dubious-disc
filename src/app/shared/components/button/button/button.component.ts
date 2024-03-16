import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dd-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() appearence: 'primary' | 'secondary' = 'primary';
  @Input() as: 'button' | 'a' = 'button';
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }

  get isPrimary() {
    return this.appearence === 'primary';
  }
}
