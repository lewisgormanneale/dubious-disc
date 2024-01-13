import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokedexGridViewItemComponent } from './components/pokedex-grid-view-item/pokedex-grid-view-item.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';
import { PokemonDescriptionsComponent } from './components/pokemon-descriptions/pokemon-descriptions.component';
import { PokemonGenderRatioComponent } from './components/pokemon-gender-ratio/pokemon-gender-ratio.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';
import { PokedexListViewItemComponent } from './components/pokedex-list-view-item/pokedex-list-view-item.component';
import { PokemonFormsComponent } from './components/pokemon-forms/pokemon-forms.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroChevronLeftSolid,
  heroChevronRightSolid,
  heroSwatchSolid,
  heroSparklesSolid,
} from '@ng-icons/heroicons/solid';
import {
  bootstrapDice6Fill,
  bootstrapGenderFemale,
  bootstrapGenderMale,
} from '@ng-icons/bootstrap-icons';
import { PokedexSelectDropdownComponent } from './components/pokedex-select-dropdown/pokedex-select-dropdown.component';
import { PokedexTabComponent } from './components/pokedex-tab/pokedex-tab.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokedexGridViewItemComponent,
    PokedexListViewItemComponent,
    PokedexSelectDropdownComponent,
    PokemonComponent,
    PokemonDataComponent,
    PokemonFormsComponent,
    PokemonDescriptionsComponent,
    PokemonGenderRatioComponent,
    PokemonStatsComponent,
    PokedexTabComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    LazyLoadImageModule,
    NgIconsModule.withIcons({
      heroChevronLeftSolid,
      heroChevronRightSolid,
      heroSwatchSolid,
      bootstrapDice6Fill,
      bootstrapGenderFemale,
      bootstrapGenderMale,
      heroSparklesSolid,
    }),
  ],
})
export class PokedexModule {}
