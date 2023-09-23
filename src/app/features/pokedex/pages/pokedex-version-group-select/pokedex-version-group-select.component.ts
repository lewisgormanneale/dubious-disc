import { Component, OnInit } from '@angular/core';
import { VersionGroup } from 'src/app/core/models/index';
import { PokeAPIService } from 'src/app/core/services/pokeapi.service';
import { getFormattedGenerationName } from 'src/app/shared/generations';

@Component({
  selector: 'app-pokedex-version-group-select',
  templateUrl: './pokedex-version-group-select.component.html',
  styleUrls: ['./pokedex-version-group-select.component.scss'],
})
export class PokedexVersionGroupSelectComponent implements OnInit {
  public versionGroups: any;

  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    this.pokeAPIService
      .getAllVersionGroups()
      .subscribe((versionGroups: any) => {
        this.versionGroups = versionGroups;
      });
  }

  getFormattedGenerationName(generation: string): string {
    return getFormattedGenerationName(generation);
  }

  generateGenerationNames(): string[] {
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
