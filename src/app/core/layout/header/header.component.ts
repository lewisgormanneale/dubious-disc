import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './header.component.html',
  standalone: true,
  providers: [],
  imports: [
    NgbCollapseModule,
    NgbDropdownModule,
    NgbTypeaheadModule,
    CoreModule,
    CommonModule,
    RouterLink,
  ],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuCollapsed = true;
}
