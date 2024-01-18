import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dd-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() primary = false;
  @Input() backgroundColor?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label = 'Button';

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'bg-byzantium' : 'bg-zinc-900';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
