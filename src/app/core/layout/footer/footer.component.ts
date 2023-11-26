import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CoreModule, CommonModule, RouterLink],
})
export class FooterComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}
  scrollToTop() {
    const options: ScrollIntoViewOptions = { behavior: 'smooth' };
    this.document.body.scrollIntoView(options);
  }
}
