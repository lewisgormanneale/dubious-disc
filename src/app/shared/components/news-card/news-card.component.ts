import { Component, Input, OnInit } from '@angular/core';
import { SanityService } from 'src/app/core/services/sanity.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
})
export class PostCardComponent implements OnInit {
  @Input() post: any = {} as any;
  imageUrl: string = '';

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.sanityService.urlFor(this.post.mainImage).then((url) => {
      this.post.mainImage = url;
    });
  }
}
