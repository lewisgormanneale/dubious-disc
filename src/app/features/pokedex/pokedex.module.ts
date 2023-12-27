import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokedexListItemComponent } from './components/pokedex-list-item/pokedex-list-item.component';
import { PokedexSelectComponent } from './pages/pokedex-select/pokedex-select.component';
import { PokedexSelectItemComponent } from './components/pokedex-select-item/pokedex-select-item.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';
import { PokemonDescriptionsComponent } from './components/pokemon-descriptions/pokemon-descriptions.component';
import { PokemonGenderRatioComponent } from './components/pokemon-gender-ratio/pokemon-gender-ratio.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokedexListItemComponent,
    PokedexSelectComponent,
    PokedexSelectItemComponent,
    PokemonComponent,
    PokemonDataComponent,
    PokemonDescriptionsComponent,
    PokemonGenderRatioComponent,
    PokemonStatsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    LazyLoadImageModule,
  ],
})
export class PokedexModule {}
