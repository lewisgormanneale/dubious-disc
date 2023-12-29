import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Database } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

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
  imageUrl: string = '';

  private supabase: SupabaseService = inject(SupabaseService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const identifier = params['pokemon'];
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
        })
      )
      .subscribe((data) => {
        this.pokemonTypes = data;
      });
  }

  handleNewSelectedForm(form: any) {
    this.selectedForm = form;
    this.imageUrl = this.supabase.storage
      .from('pokemon')
      .getPublicUrl('home-previews/' + form.id + '.png').data.publicUrl;
  }
}
