import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanityService } from 'src/app/core/services/sanity.service';
import { toHTML, uriLooksSafe } from '@portabletext/to-html';
import htm from 'htm';
import vhtml from 'vhtml';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent {
  articleSlug: string = '';
  post: any;
  imagesLoaded: boolean = false;

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

  constructor(
    private sanityService: SanityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params) => {
      this.articleSlug = params.get('slug') || '';
      this.post = await this.sanityService.getPostBySlug(this.articleSlug);
      this.post.author = await this.sanityService.getAuthorByRefence(
        this.post.author._ref
      );
      this.post.mainImage = await this.sanityService.urlFor(
        this.post.mainImage
      );
      this.post.author.image.asset = await this.sanityService.urlFor(
        this.post.author.image.asset
      );
      this.imagesLoaded = true;
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  toHTML(text: any) {
    return toHTML(text, { components: this.myPortableTextComponents });
  }
}
