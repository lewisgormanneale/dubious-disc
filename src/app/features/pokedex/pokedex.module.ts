import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { PokedexListItemComponent } from './components/pokedex-list-item/pokedex-list-item.component';
import { PokedexVersionGroupSelectComponent } from './pages/pokedex-version-group-select/pokedex-version-group-select.component';
import { PokedexVersionSelectItemComponent } from './components/pokedex-version-select-item/pokedex-version-select-item.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokedexListItemComponent,
    PokedexVersionGroupSelectComponent,
    PokedexVersionSelectItemComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    NgbCollapseModule,
    NgbDropdownModule,
    InfiniteScrollModule,
  ],
})
export class PokedexModule {}
