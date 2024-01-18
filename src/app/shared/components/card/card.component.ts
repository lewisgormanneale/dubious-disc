import { Component, Input } from '@angular/core';

@Component({
  selector: 'dd-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() title?: string;
}
