import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  pokemon: any;
  pokemon_species: any;
  pokemon_types: any;
  imageUrl: string = '';

  private supabase: SupabaseService = inject(SupabaseService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          let identifier = params['identifier'];
          return this.supabase.getPokemonSpeciesByIdentifier(identifier);
        }),
        tap((data) => {
          this.pokemon_species = data;
          this.imageUrl = this.supabase.storage
            .from('pokemon')
            .getPublicUrl('home/' + data.id + '.png').data.publicUrl;
        }),
        switchMap((data) => {
          return this.supabase.getPokemonBySpeciesId(data.id);
        }),
        tap((data) => {
          this.pokemon = data[0];
        }),
        switchMap((data) => {
          return this.supabase.getPokemonTypesByPokemonId(data[0].id);
        })
      )
      .subscribe((data) => {
        this.pokemon_types = data;
      });
  }
}
