import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'dd-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CoreModule, CommonModule, RouterLink],
})
export class FooterComponent {
  constructor() {}

  ngOnInit(): void {}
}
