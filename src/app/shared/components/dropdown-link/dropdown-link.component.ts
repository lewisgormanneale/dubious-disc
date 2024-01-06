import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { DropdownLinkSection } from 'src/app/core/models';

@Component({
  selector: 'app-dropdown-link',
  templateUrl: './dropdown-link.component.html',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0.95)',
        })
      ),
      transition('void <=> *', animate('100ms ease-in-out')),
    ]),
  ],
})
export class DropdownLinkComponent {
  @Input() sections: DropdownLinkSection[] = [];
  @Input() placeholder: string = '';
  @Input() origin?: string = '';
  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
