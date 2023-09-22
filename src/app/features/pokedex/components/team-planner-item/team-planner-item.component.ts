import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  PokemonDetails,
  PokemonEntry,
  PokemonSpeciesDetails,
} from 'src/app/core/models';
import { PokeAPIService } from 'src/app/core/services/pokeapi.service';

@Component({
  selector: 'app-team-planner-item',
  templateUrl: './team-planner-item.component.html',
  styleUrls: ['./team-planner-item.component.scss'],
})
export class TeamPlannerItemComponent implements OnInit {
  @Input() pokemon: PokemonEntry = {} as PokemonEntry;
  @Output() removePokemonFromTeam = new EventEmitter<PokemonEntry>();
  pokemonDetails: PokemonDetails = {} as PokemonDetails;
  pokemonSpeciesDetails: PokemonSpeciesDetails = {} as PokemonSpeciesDetails;
  localisedPokemonName: string = '';
  pokemonID: string = '';
  imageURL: string = '';
  shiny: boolean = false;
  gender: string = '';
  genderIcon: string = '';
  genderColor: string = '#6890cb';
  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
    if (this.pokemon.pokemon_species) {
      this.pokemonID = this.pokemon.pokemon_species.url
        .split('/')
        .slice(-2, -1)[0];
      this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonID}.png`;
      this.pokeAPIService
        .getPokemonSpeciesDetails(this.pokemon.pokemon_species.name)
        .subscribe((pokemonSpeciesDetails) => {
          this.pokemonSpeciesDetails = pokemonSpeciesDetails;
          this.gender = this.getInitialGenderByRate();
          this.localisedPokemonName =
            this.pokeAPIService.getPokemonNameByLanguage(
              this.pokemonSpeciesDetails.names!,
              'en'
            );
        });
      this.pokeAPIService
        .getPokemonDetails(this.pokemon.pokemon_species.name)
        .subscribe((pokemonDetails) => {
          this.pokemonDetails = pokemonDetails;
        });
    }
  }

  toggleShiny(): string {
    this.shiny = !this.shiny;
    if (this.shiny) {
      if (
        this.gender === 'female' &&
        this.pokemonSpeciesDetails.has_gender_differences
      ) {
        this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${this.pokemonID}.png`;
      } else {
        this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.pokemonID}.png`;
      }
    } else {
      if (
        this.gender === 'female' &&
        this.pokemonSpeciesDetails.has_gender_differences
      ) {
        this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${this.pokemonID}.png`;
      } else {
        this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonID}.png`;
      }
    }
    return this.imageURL;
  }

  getInitialGenderByRate(): string {
    if (this.pokemonSpeciesDetails.gender_rate === -1) {
      this.genderIcon = 'bi-gender-ambiguous';
      this.genderColor = '#4fc337';
      return 'genderless';
    } else if (this.pokemonSpeciesDetails.gender_rate === 8) {
      this.genderIcon = 'bi-gender-female';
      this.genderColor = '#f15d69';
      return 'always-female';
    } else if (this.pokemonSpeciesDetails.gender_rate === 0) {
      this.genderIcon = 'bi-gender-male';
      this.genderColor = '#6890cb';
      return 'always-male';
    } else {
      this.genderIcon = 'bi-gender-male';
      this.genderColor = '#6890cb';
      return 'male';
    }
  }

  toggleGender(): void {
    if (this.gender === 'male') {
      this.gender = 'female';
      this.genderIcon = 'bi-gender-female';
      this.genderColor = '#f15d69';
      if (this.pokemonSpeciesDetails.has_gender_differences) {
        if (this.shiny) {
          this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${this.pokemonID}.png`;
        } else {
          this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${this.pokemonID}.png`;
        }
      }
    } else if (this.gender === 'female') {
      this.gender = 'male';
      this.genderIcon = 'bi-gender-male';
      this.genderColor = '#6890cb';
      if (this.pokemonSpeciesDetails.has_gender_differences) {
        if (this.shiny) {
          this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.pokemonID}.png`;
        } else {
          this.imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonID}.png`;
        }
      }
    }
  }
}
