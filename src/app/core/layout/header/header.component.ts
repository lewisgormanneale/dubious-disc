import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './header.component.html',
  standalone: true,
  providers: [],
  imports: [CoreModule, CommonModule, RouterLink],
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuCollapsed = true;
}
