import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';
import { headerNavItems } from 'src/app/core/models';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CoreModule, SharedModule, CommonModule, RouterLink],
})
export class HeaderComponent {
  constructor() {}

  navItems = headerNavItems;
}
