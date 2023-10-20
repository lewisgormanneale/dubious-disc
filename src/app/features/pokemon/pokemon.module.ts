import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [PokemonComponent],
  imports: [CommonModule, CoreModule, SharedModule, AppRoutingModule],
})
export class PokemonModule {}
