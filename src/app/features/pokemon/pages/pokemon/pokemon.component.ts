import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { versions } from 'process';
import { map, switchMap, tap, forkJoin, Subject, takeUntil } from 'rxjs';
import { DropdownLinkSection, Tables } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

interface DropdownLinkOption {
  name: string;
  path: string;
}

@Component({
  selector: 'dd-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  pokemonForms: Tables<'pokemon'>[] = [];
  selectedForm: Tables<'pokemon'> = {} as Tables<'pokemon'>;
  pokemonSpecies: Tables<'pokemon_species'> = {} as Tables<'pokemon_species'>;

  versionGroupIdentifier: string = '';
  selectedVersionGroup: any = '';
  versions: Tables<'versions'>[] = [];

  private supabase: SupabaseService = inject(SupabaseService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const pokemonIdentifier = params['pokemon'];
          this.versionGroupIdentifier = params['version-group'];
          return this.supabase.getPokemonSpeciesByIdentifier(pokemonIdentifier);
        }),
        tap((pokemonSpecies) => {
          this.pokemonSpecies = pokemonSpecies;
        }),
        switchMap((pokemonSpecies) => {
          return this.supabase.getPokemonBySpeciesId(pokemonSpecies.id);
        }),
        tap((pokemon) => {
          this.pokemonForms = pokemon;
          this.selectedForm = pokemon[0];
        })
      )
      .subscribe(() => {});
  }

  handleNewSelectedForm(form: any) {
    this.selectedForm = form;
  }

  handleVersions(versions: any) {
    this.versions = versions;
  }

  handleSelectedVersionGroup(versionGroup: any) {
    this.selectedVersionGroup = versionGroup;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
