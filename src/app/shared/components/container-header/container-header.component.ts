import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-header',
  templateUrl: './container-header.component.html',
})
export class ContainerHeaderComponent {
  @Input() title: string = '';
}
