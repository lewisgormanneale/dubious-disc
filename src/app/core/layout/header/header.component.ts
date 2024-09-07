import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';
import { headerNavItems } from 'src/app/core/models';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderDropdownComponent } from './components/header-dropdown/header-dropdown.component';

@Component({
  selector: 'dd-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    CoreModule,
    CommonModule,
    SharedModule,
    RouterLink,
    HeaderDropdownComponent,
  ],
})
export class HeaderComponent {
  public navItems = headerNavItems;
}
