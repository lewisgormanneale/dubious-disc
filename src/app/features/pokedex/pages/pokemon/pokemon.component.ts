import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap, concatMap } from 'rxjs';
import { Database } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

interface DropdownLinkOption {
  name: string;
  path: string;
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  pokemonForms: Database['public']['Tables']['pokemon']['Row'][] = [];
  selectedForm: Database['public']['Tables']['pokemon']['Row'] = {} as any;
  pokemonSpecies: Database['public']['Tables']['pokemon_species']['Row'] =
    {} as any;
  pokemonTypes: any;
  shiny: boolean = false;

  pokedexGeneration: string = '';
  pokedexOptions: DropdownLinkOption[] = [];

  imageUrl: string = '';
  previousPokemonImageUrl: string = '';
  nextPokemonImageUrl: string = '';

  private supabase: SupabaseService = inject(SupabaseService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const identifier = params['pokemon'];
          this.pokedexGeneration = params['generation'];
          return this.supabase.getPokemonSpeciesByIdentifier(identifier);
        }),
        tap((data) => {
          this.pokemonSpecies = data;
          this.imageUrl = this.supabase.storage
            .from('pokemon')
            .getPublicUrl('home-previews/' + data.id + '.png').data.publicUrl;
        }),
        switchMap((data) => {
          return this.supabase.getPokemonBySpeciesId(data.id);
        }),
        tap((data) => {
          this.pokemonForms = data;
          this.selectedForm = data[0];
        }),
        switchMap((data) => {
          return this.supabase.getPokemonTypesByPokemonId(data[0].id);
        }),
        tap((data) => {
          this.pokemonTypes = data;
        })
      )
      .subscribe();
    this.getPokedexOptions();
  }

  handleNewSelectedForm(form: any) {
    this.selectedForm = form;
    this.supabase.getPokemonTypesByPokemonId(form.id).subscribe((data) => {
      this.pokemonTypes = data;
    });
    if (this.shiny) {
      this.imageUrl = this.supabase.storage
        .from('pokemon')
        .getPublicUrl('home-previews/shiny/' + form.id + '.png').data.publicUrl;
    } else {
      this.imageUrl = this.supabase.storage
        .from('pokemon')
        .getPublicUrl('home-previews/' + form.id + '.png').data.publicUrl;
    }
  }

  getPokedexOptions() {
    let versionGroups = [] as any;
    this.supabase
      .getAllVersionGroups()
      .pipe(
        tap((data) => {
          versionGroups = data;
        }),
        concatMap(() => this.supabase.getAllPokedexVersionGroups()),
        map((pokedexVersionGroups) =>
          pokedexVersionGroups
            .filter((item: any) =>
              versionGroups
                .map((group: any) => group.id)
                .includes(item.version_group_id)
            )
            .map((item: any) => {
              const versionGroup = versionGroups.find(
                (group: any) => group.id === item.version_group_id
              );
              return {
                name: versionGroup ? versionGroup.name : '',
                path: versionGroup
                  ? '/pokedex/' +
                    versionGroup.identifier +
                    '/' +
                    this.pokemonSpecies.identifier
                  : '',
              };
            })
            .reduce((unique: any[], item: any) => {
              return unique.findIndex(
                (uniqueItem: any) =>
                  uniqueItem.name === item.name && uniqueItem.path === item.path
              ) >= 0
                ? unique
                : [...unique, item];
            }, [])
        )
      )
      .subscribe((versionGroupsWithPokedexes) => {
        this.pokedexOptions = versionGroupsWithPokedexes;
        console.log(this.pokedexOptions);
      });
  }

  shinyToggle() {
    this.shiny = !this.shiny;
    if (this.shiny) {
      this.imageUrl = this.supabase.storage
        .from('pokemon')
        .getPublicUrl(
          'home-previews/shiny/' + this.selectedForm.id + '.png'
        ).data.publicUrl;
    } else {
      this.imageUrl = this.supabase.storage
        .from('pokemon')
        .getPublicUrl(
          'home-previews/' + this.selectedForm.id + '.png'
        ).data.publicUrl;
    }
  }
}
