import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PokedexModule } from './features/pokedex/pokedex.module';
import { HomeModule } from './features/home/home.module';
import { TeamBuilderModule } from './features/team-builder/team-builder.module';
import { NewsModule } from './features/news/news.module';
import { GamesModule } from './features/games/games.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pokedex/:version-group',
    loadChildren: () =>
      import('./features/pokedex/pokedex.module').then((m) => m.PokedexModule),
  },
  {
    path: 'pokedex/:version-group/:pokemon',
    loadChildren: () =>
      import('./features/pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
  {
    path: 'games/:slug',
    loadChildren: () =>
      import('./features/games/games.module').then((m) => m.GamesModule),
  },
  {
    path: 'news/:slug',
    loadChildren: () =>
      import('./features/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'team-builder',
    loadChildren: () =>
      import('./features/team-builder/team-builder.module').then(
        (m) => m.TeamBuilderModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    HomeModule,
    PokedexModule,
    RouterModule.forRoot(routes),
    TeamBuilderModule,
    NewsModule,
    GamesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
