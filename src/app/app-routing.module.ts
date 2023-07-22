import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/pages/home.component';
import { PokedexVersionSelectComponent } from './features/pokedex/pages/pokedex-version-select/pokedex-version-select.component';
import { PokedexComponent } from './features/pokedex/pages/pokedex/pokedex.component';
import { PokemonComponent } from './features/pokemon/pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full',
  },
  { path: 'pokedex', component: PokedexVersionSelectComponent },
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
