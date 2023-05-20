import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PokedexComponent } from './pages/pokedex/pokedex.component';

@NgModule({
  declarations: [PokedexComponent],
  imports: [CommonModule, CoreModule, SharedModule, AppRoutingModule],
})
export class PokedexModule {}
