import { Component, Input } from '@angular/core';
import { DropdownLinkOption, DropdownLinkSection } from 'src/app/core/models';

@Component({
  selector: 'app-dropdown-link',
  templateUrl: './dropdown-link.component.html',
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
