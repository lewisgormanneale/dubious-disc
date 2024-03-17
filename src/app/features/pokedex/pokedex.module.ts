import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokedexGridViewItemComponent } from './components/pokedex-grid-view-item/pokedex-grid-view-item.component';
import { PokedexListViewItemComponent } from './components/pokedex-list-view-item/pokedex-list-view-item.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
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
import { PokedexViewComponent } from './components/pokedex-view/pokedex-view.component';

const routes = [{ path: '', component: PokedexComponent }];

@NgModule({
  declarations: [
    PokedexComponent,
    PokedexGridViewItemComponent,
    PokedexListViewItemComponent,
    PokedexViewComponent,
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
export class PokedexModule {}
