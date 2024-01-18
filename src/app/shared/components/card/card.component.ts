import { Component, Input } from '@angular/core';

@Component({
  selector: 'dd-card',
  templateUrl: './card.component.html',
})
export class ContainerHeaderComponent {
  @Input() title: string = '';
}
