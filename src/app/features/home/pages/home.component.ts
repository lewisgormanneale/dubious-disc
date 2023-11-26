import { Component } from '@angular/core';
import { SanityService } from 'src/app/core/services/sanity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  posts: any[] = [];

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.sanityService.getPosts().then((posts) => {
      this.posts = posts;
    });
  }
}
