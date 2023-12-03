import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanityService } from 'src/app/core/services/sanity.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent {
  articleSlug: string = '';
  post: any;

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
      console.log(this.post);
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
