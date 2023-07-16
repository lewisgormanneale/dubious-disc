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
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { PokedexListItemComponent } from './components/pokedex-list-item/pokedex-list-item.component';
import { FormsModule } from '@angular/forms';
import { PokedexSearchComponent } from './components/pokedex-search/pokedex-search.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokedexListItemComponent,
    PokedexSearchComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbTypeaheadModule,
    InfiniteScrollModule,
  ],
})
export class PokedexModule {}
