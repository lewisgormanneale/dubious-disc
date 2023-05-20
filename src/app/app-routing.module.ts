import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './modules/pokedex/pages/pokedex/pokedex.component';
import { PokemonComponent } from './modules/pokemon/pages/pokemon/pokemon.component';

const routes: Routes = [
  { path: 'pokedex/:id', component: PokedexComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: '', redirectTo: '/pokedex/1', pathMatch: 'full' },
  { path: '**', redirectTo: '/pokedex/1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
