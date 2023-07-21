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
import { TeamPlannerComponent } from './components/team-planner/team-planner.component';
import { TeamPlannerItemComponent } from './components/team-planner-item/team-planner-item.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokedexListItemComponent,
    TeamPlannerComponent,
    TeamPlannerItemComponent,
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
