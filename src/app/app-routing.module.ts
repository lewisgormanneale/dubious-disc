import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/pages/home.component';
import { PokedexComponent } from './features/pokedex/pages/pokedex/pokedex.component';
import { PokemonComponent } from './features/pokemon/pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokedex/1',
    pathMatch: 'full',
  },
  { path: 'pokedex/:id', component: PokedexComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
