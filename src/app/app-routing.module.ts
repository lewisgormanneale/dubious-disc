import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './features/games/pages/games.component';
import { HomeComponent } from './features/home/pages/home.component';
import { NewsComponent } from './features/news/pages/news.component';
import { PokedexComponent } from './features/pokedex/pages/pokedex/pokedex.component';
import { PokemonComponent } from './features/pokedex/pages/pokemon/pokemon.component';
import { TeamBuilderComponent } from './features/team-builder/pages/team-builder.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokedex/:generation', component: PokedexComponent },
  { path: 'pokedex/:generation/:pokemon', component: PokemonComponent },
  { path: 'games/:slug', component: GamesComponent },
  { path: 'news/:slug', component: NewsComponent },
  { path: 'team-builder', component: TeamBuilderComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
