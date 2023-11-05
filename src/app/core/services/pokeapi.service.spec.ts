import { TestBed } from '@angular/core/testing';
import { PokeAPIService } from './pokeapi.service';
import { HttpClientModule } from '@angular/common/http';

describe('PokedexService', () => {
  let service: PokeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
