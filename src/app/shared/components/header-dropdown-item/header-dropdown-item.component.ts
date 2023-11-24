import { Component, Input } from '@angular/core';
import { NavigationItem } from 'src/app/core/models';
@Component({
  selector: 'app-header-dropdown-item',
  templateUrl: './header-dropdown-item.component.html',
})
export class HeaderDropdownItemComponent {
  @Input()
  navItem!: NavigationItem;
}
