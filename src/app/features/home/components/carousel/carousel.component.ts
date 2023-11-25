import { Component, Input, OnInit } from '@angular/core';
import { PokemonEntry } from 'src/app/core/models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {
  @Input() posts: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
