import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';
import { headerNavItems } from 'src/app/core/models';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeService } from '../../services/theme.service';
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
  private _themeService = inject(ThemeService);
  public navItems = headerNavItems;

  toggleDarkMode(): void {
    this._themeService.toggleDarkMode();
  }

  get isDarkMode(): boolean {
    return this._themeService.isDarkMode();
  }
}
