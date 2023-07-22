import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/core/services/pokedex.service';
import { PokedexVersions, PokemonEntry } from 'src/app/core/models/index';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokedex-version-select',
  templateUrl: './pokedex-version-select.component.html',
  styleUrls: ['./pokedex-version-select.component.scss'],
})
export class PokedexVersionSelectComponent {
  public pokedexVersions = PokedexVersions;

  constructor(private router: Router, private route: ActivatedRoute) {}
}
