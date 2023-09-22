import { Component, OnInit } from '@angular/core';
import { PokedexVersions, VersionGroup } from 'src/app/core/models/index';
import { PokeAPIService } from 'src/app/core/services/pokeapi.service';

@Component({
  selector: 'app-pokedex-version-select',
  templateUrl: './pokedex-version-select.component.html',
  styleUrls: ['./pokedex-version-select.component.scss'],
})
export class PokedexVersionSelectComponent implements OnInit {
  public pokedexVersions = PokedexVersions;
  public versionGroups: any;

  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    this.pokeAPIService
      .getAllVersionGroups()
      .subscribe((versionGroups: any) => {
        this.versionGroups = versionGroups;
      });
  }

  generateGenerationNames(): string[] {
    // Assuming you have a property versionGroups with the data
    const generationNumbers = this.versionGroups.map(
      (group: VersionGroup) => group.generation.name
    );
    return Array.from(new Set(generationNumbers));
  }

  getVersionGroupsByGeneration(generation: string): VersionGroup[] {
    return this.versionGroups.filter(
      (group: VersionGroup) => group.generation.name === generation
    );
  }
}
