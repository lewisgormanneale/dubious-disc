import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokedexListItemComponent } from './components/pokedex-list-item/pokedex-list-item.component';
import { PokedexVersionGroupSelectComponent } from './pages/pokedex-version-group-select/pokedex-version-group-select.component';
import { PokedexVersionGroupSelectItemComponent } from './components/pokedex-version-group-select-item/pokedex-version-group-select-item.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokedexListItemComponent,
    PokedexVersionGroupSelectComponent,
    PokedexVersionGroupSelectItemComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    InfiniteScrollModule,
  ],
})
export class PokedexModule {}
