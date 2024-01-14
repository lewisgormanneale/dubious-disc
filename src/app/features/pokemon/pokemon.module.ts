import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonDataComponent } from './components/pokemon-data/pokemon-data.component';
import { PokemonDescriptionsComponent } from './components/pokemon-descriptions/pokemon-descriptions.component';
import { PokemonGenderRatioComponent } from './components/pokemon-gender-ratio/pokemon-gender-ratio.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';
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

const routes = [{ path: '', component: PokemonComponent }];

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonDataComponent,
    PokemonFormsComponent,
    PokemonDescriptionsComponent,
    PokemonGenderRatioComponent,
    PokemonStatsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
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
export class PokemonModule {}
