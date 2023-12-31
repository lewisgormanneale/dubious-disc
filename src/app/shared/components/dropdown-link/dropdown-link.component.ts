import { Component, Input } from '@angular/core';

interface DropdownLinkOption {
  name: string;
  path: string;
}

@Component({
  selector: 'app-dropdown-link',
  templateUrl: './dropdown-link.component.html',
})
export class DropdownLinkComponent {
  @Input() options: DropdownLinkOption[] = [];
  @Input() placeholder: string = '';
  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
