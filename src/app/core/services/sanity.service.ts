import { Injectable } from '@angular/core';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  constructor() {}

  private client = createClient({
    projectId: '6oeacjo5',
    dataset: 'production',
    apiVersion: '2023-11-24',
    useCdn: true,
  });

  private builder = imageUrlBuilder(this.client);

  async getPosts() {
    const query = '*[_type == "post"]';
    return this.client.fetch(query);
  }

  async getPostsByCategory(category: string) {
    const query = `*[_type == "post" && "${category}" match categories[]->slug.current]`;
    return this.client.fetch(query);
  }

  async urlFor(source: string) {
    return this.builder.image(source);
  }
}
