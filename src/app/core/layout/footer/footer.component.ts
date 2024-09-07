import { Component, inject, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: 'dd-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CoreModule, CommonModule, RouterLink, SharedModule],
})
export class FooterComponent {
  private _themeService = inject(ThemeService);

  toggleDarkMode(): void {
    this._themeService.toggleDarkMode();
  }

  get isDarkMode(): boolean {
    return this._themeService.isDarkMode();
  }
}
