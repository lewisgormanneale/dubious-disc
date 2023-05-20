import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionsComponent } from './descriptions.component';
import { By } from '@angular/platform-browser';
import { PokemonFlavorText } from 'src/app/core/models';

describe('DescriptionsComponent', () => {
  let component: DescriptionsComponent;
  let fixture: ComponentFixture<DescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when there are no descriptions', () => {
    it('should not render any descriptions', () => {
      fixture.detectChanges();
      const listItems = fixture.debugElement.queryAll(
        By.css('.list-group-item')
      );
      expect(listItems.length).toBe(0);
    });

    it('show more button should not be visible', () => {
      const button = fixture.nativeElement.querySelector('.btn');
      expect(button).toBeNull();
    });
  });

  describe('when there are less than 3 descriptions', () => {
    beforeEach(() => {
      component.descriptions = underThreeEnglishDescriptions;
      fixture.detectChanges();
    });

    it('should render only unique English descriptions', () => {
      const expectedDescriptions = ['Description 2', 'Description 1'];
      const listItems = fixture.debugElement.queryAll(
        By.css('.list-group-item')
      );
      const actualDescriptions = listItems.map((li) =>
        li.nativeElement.textContent.trim()
      );
      expect(actualDescriptions).toEqual(expectedDescriptions);
    });

    it('show more button should not be visible', () => {
      const button = fixture.nativeElement.querySelector('.btn');
      expect(button).toBeNull();
    });
  });

  describe('when there are more than 3 descriptions', () => {
    beforeEach(() => {
      component.descriptions = overThreeEnglishDescriptions;
      fixture.detectChanges();
    });

    it('should display only the first 3 English descriptions in reverse order when there are more than 5 English descriptions', () => {
      const descriptionsList =
        fixture.nativeElement.querySelectorAll('.list-group-item');
      expect(descriptionsList.length).toBe(3);
      expect(descriptionsList[0].textContent).toContain(
        'English description 7'
      );
      expect(descriptionsList[1].textContent).toContain(
        'English description 6'
      );
      expect(descriptionsList[2].textContent).toContain(
        'English description 5'
      );
    });

    it('show more button should be visible', () => {
      const button = fixture.nativeElement.querySelector('.btn');
      expect(button).toBeTruthy();
    });

    it('should toggle "show more" when the button is clicked', () => {
      const button = fixture.debugElement.query(
        By.css('.btn-primary')
      ).nativeElement;
      expect(component.showMore).toBe(false);
      button.click();
      expect(component.showMore).toBe(true);
      button.click();
      expect(component.showMore).toBe(false);
    });

    it('should render all descriptions when "show more" is clicked', () => {
      component.showMore = true;
      fixture.detectChanges();
      const listItems = fixture.debugElement.queryAll(
        By.css('.list-group-item')
      );
      expect(listItems.length).toBe(7);
    });
  });
});

const underThreeEnglishDescriptions: PokemonFlavorText[] = [
  {
    flavor_text: 'Description 1',
    language: {
      name: 'en',
      url: '',
    },
    version: {
      name: '',
      url: '',
    },
  },
  {
    flavor_text: 'Description 2',
    language: {
      name: 'en',
      url: '',
    },
    version: {
      name: '',
      url: '',
    },
  },
  {
    flavor_text: 'Description 3',
    language: {
      name: 'fr',
      url: '',
    },
    version: {
      name: '',
      url: '',
    },
  },
];

const overThreeEnglishDescriptions: PokemonFlavorText[] = [
  {
    flavor_text: 'English description 1',
    language: {
      name: 'en',
      url: '',
    },
    version: {
      name: '',
      url: '',
    },
  },
  {
    flavor_text: 'English description 2',
    language: {
      name: 'en',
      url: '',
    },
    version: {
      name: '',
      url: '',
    },
  },
  {
    flavor_text: 'English description 3',
    language: {
      name: 'en',
      url: '',
    },
    version: {
      name: '',
      url: '',
    },
  },
  {
    flavor_text: 'English description 4',
    language: {
      name: 'en',
      url: '',
    },
    version: {
      name: '',
      url: '',
    },
  },
  {
    flavor_text: 'English description 5',
    language: {
      name: 'en',
      url: '',
    },
    version: {
      name: '',
      url: '',
    },
  },
  {
    flavor_text: 'English description 6',
    language: {
      name: 'en',
      url: '',
    },
    version: {
      name: '',
      url: '',
    },
  },
  {
    flavor_text: 'English description 7',
    language: {
      name: 'en',
      url: '',
    },
    version: {
      name: '',
      url: '',
    },
  },
];
