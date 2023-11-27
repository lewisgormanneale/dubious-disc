import { Component, Input, OnInit } from '@angular/core';
import { SanityService } from 'src/app/core/services/sanity.service';

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

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    const date = new Date(this.post.publishedAt); // 2009-11-10

    this.publishedYear = date.getUTCFullYear();
    this.publishedMonth = date.toLocaleString('default', { month: 'short' });
    this.publishedDay = date.getUTCDate();

    this.sanityService.urlFor(this.post.mainImage).then((url) => {
      this.post.mainImage = url;
    });
  }
}
