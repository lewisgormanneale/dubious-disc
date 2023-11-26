import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PokedexModule } from './features/pokedex/pokedex.module';
import { PokemonModule } from './features/pokemon/pokemon.module';
import { HomeModule } from './features/home/home.module';
import { TeamBuilderModule } from './features/team-builder/team-builder.module';
import { NewsModule } from './features/news/news.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    HomeModule,
    PokedexModule,
    PokemonModule,
    AppRoutingModule,
    TeamBuilderModule,
    NewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
