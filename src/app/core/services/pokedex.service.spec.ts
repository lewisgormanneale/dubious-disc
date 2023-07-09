import { TestBed } from '@angular/core/testing';

import { PokedexService } from './pokedex.service';
import { HttpClientModule } from '@angular/common/http';

describe('PokedexService', () => {
  let service: PokedexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
