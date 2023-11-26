import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './pages/games.component';

@NgModule({
  declarations: [GamesComponent],
  imports: [CommonModule, CoreModule, SharedModule, AppRoutingModule],
})
export class GamesModule {}
