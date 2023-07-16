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

@NgModule({
  declarations: [PokedexComponent, PokedexListItemComponent],
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
