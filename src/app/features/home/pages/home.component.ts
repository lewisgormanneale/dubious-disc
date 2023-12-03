import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  pokemonID = this.getRandomPokemonID();

  constructor() {}

  getRandomPokemonID() {
    return Math.floor(Math.random() * 1010) + 1;
  }
}
