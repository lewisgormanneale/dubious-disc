import { Component, inject, Input, OnInit } from '@angular/core';
import { SanityService } from 'src/app/core/services/sanity.service';
import { toHTML, uriLooksSafe } from '@portabletext/to-html';
import htm from 'htm';
import vhtml from 'vhtml';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
})
export class PostCardComponent implements OnInit {
  @Input() post: any = {} as any;
  imageUrl: string = '';

  publishedYear: number = 0;
  publishedMonth: string = '';
  publishedDay: number = 0;

  html = htm.bind(vhtml);
  myPortableTextComponents = {
    types: {},

    marks: {
      link: ({ children, value }: any) => {
        const href = value.href || '';
        if (uriLooksSafe(href)) {
          const rel = href.startsWith('/') ? undefined : 'noreferrer noopener';
          return this.html`<a href="${href}" rel="${rel}">${children}</a>`;
        }
        return children;
      },
    },
  };

  private sanityService: SanityService = inject(SanityService);

  ngOnInit(): void {
    const date = new Date(this.post.publishedAt); // 2009-11-10

    this.publishedYear = date.getUTCFullYear();
    this.publishedMonth = date.toLocaleString('default', { month: 'short' });
    this.publishedDay = date.getUTCDate();

    this.sanityService.urlFor(this.post.mainImage).then((url) => {
      this.post.mainImage = url;
    });
  }

  toHTML(text: any) {
    return toHTML(text, { components: this.myPortableTextComponents });
  }
}
