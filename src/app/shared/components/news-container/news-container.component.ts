import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SanityService } from 'src/app/core/services/sanity.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
})
export class NewsContainerComponent implements OnChanges {
  @Input() category?: string;
  posts: any;

  constructor(private sanityService: SanityService) {}

  ngOnInit() {
    this.updateNews();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category'] && !changes['category'].firstChange) {
      // The category input has changed. Update the component.
      this.updateNews();
    }
  }

  updateNews(): void {
    if (this.category) {
      this.sanityService.getPostsByCategory(this.category).then((posts) => {
        this.posts = this.groupPostsByDate(posts);
      });
    } else {
      this.sanityService.getPosts().then((posts) => {
        this.posts = this.groupPostsByDate(posts);
      });
    }
  }

  groupPostsByDate(posts: any) {
    const groupedPosts = posts.reduce((grouped: any, post: any) => {
      const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(post);
      return grouped;
    }, {});

    return Object.entries(groupedPosts);
  }
}
