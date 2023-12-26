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

@NgModule({
  declarations: [
    PokedexComponent,
    PokedexListItemComponent,
    PokedexSelectComponent,
    PokedexSelectItemComponent,
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
