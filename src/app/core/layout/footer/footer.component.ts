import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CoreModule, CommonModule, RouterLink],
})
export class FooterComponent {}
