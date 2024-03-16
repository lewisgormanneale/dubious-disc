import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dd-compound-button',
  templateUrl: './compound-button.component.html',
})
export class CompoundButtonComponent {
  @Input() appearance: 'primary' | 'secondary' = 'primary';
  @Input() buttonText: string = '';
  @Input() icon: string = '';
  @Input() secondaryText?: string;
  @Input() url?: string;

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }

  get isPrimary() {
    return this.appearance === 'primary';
  }
}
