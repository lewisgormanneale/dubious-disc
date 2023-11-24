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

  async getPosts() {
    const query = '*[_type == "post"]';
    return this.client.fetch(query);
  }
}
