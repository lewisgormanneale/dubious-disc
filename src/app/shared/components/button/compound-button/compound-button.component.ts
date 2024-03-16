import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dd-compound-button',
  templateUrl: './compound-button.component.html',
})
export class CompoundButtonComponent {
  @Input() appearance: 'primary' | 'secondary' = 'primary';
  @Input() url: string = '';
  @Input() imageUrl: string = '';
  @Input() buttonText: string = '';
  @Input() secondaryText: string = '';
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }

  get isPrimary() {
    return this.appearance === 'primary';
  }
}
