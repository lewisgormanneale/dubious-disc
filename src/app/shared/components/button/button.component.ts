import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dd-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label = '';
  @Input() primary: boolean = false;
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
