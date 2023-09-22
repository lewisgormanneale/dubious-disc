import { Component, OnInit, Version } from '@angular/core';
import { PokedexVersions } from 'src/app/core/models/index';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeAPIService } from 'src/app/core/services/pokeapi.service';

@Component({
  selector: 'app-pokedex-version-select',
  templateUrl: './pokedex-version-select.component.html',
  styleUrls: ['./pokedex-version-select.component.scss'],
})
export class PokedexVersionSelectComponent {
  public pokedexVersions = PokedexVersions;
  public versionGroups: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokeAPIService: PokeAPIService
  ) {}

  ngOnInit(): void {
    this.pokeAPIService
      .getAllVersionGroups()
      .subscribe((versionGroups: any) => {
        this.versionGroups = versionGroups;
        console.log(this.versionGroups);
      });
  }
}
