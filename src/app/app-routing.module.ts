import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/pages/home.component';
import { PokedexComponent } from './features/pokedex/pages/pokedex/pokedex.component';
import { PokemonComponent } from './features/pokemon/pages/pokemon/pokemon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokedex/:id', component: PokedexComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
