import { Component, Input, OnInit } from '@angular/core';
import { SanityService } from 'src/app/core/services/sanity.service';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
})
export class CarouselItemComponent implements OnInit {
  @Input() post: any = {} as any;
  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.sanityService.urlFor(this.post.mainImage).then((url) => {
      this.post.mainImage = url;
    });
  }
}
