import { Component, Input } from '@angular/core';
import { FlavorText } from 'src/app/core/models';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
})
export class DescriptionsComponent {
  @Input() descriptions?: FlavorText[];
  uniqueDescriptions: string[];
  visibleDescriptions: string[];
  showMore = false;

  constructor() {
    this.uniqueDescriptions = [];
    this.visibleDescriptions = [];
  }

  getUniqueEnglishDescriptions(descriptions: FlavorText[]) {
    // Filter out descriptions that are not in English, then create a new Set from the remaining descriptions, then map the Set back to an array of descriptions.
    const uniqueDescriptions = Array.from(
      new Set(
        descriptions
          .filter((description) => description.language.name === 'en')
          .map((description) => description.flavor_text)
      )
    );
    // Reverse the array so that the most recent description is first. Type guard to filter out undefined values.
    return uniqueDescriptions
      .filter((description): description is string => !!description)
      .reverse();
  }

  get englishDescriptions() {
    if (this.descriptions && this.showMore === false) {
      this.uniqueDescriptions = this.getUniqueEnglishDescriptions(
        this.descriptions
      );
      this.visibleDescriptions = this.uniqueDescriptions.slice(0, 3);
      return this.visibleDescriptions;
    }

    if (this.descriptions && this.showMore === true) {
      return this.uniqueDescriptions;
    }

    return [];
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
