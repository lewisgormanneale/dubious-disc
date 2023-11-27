import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getFormattedVersionGroupName } from 'src/app/shared/utils/games.utils';
import { getFormattedPokedexName } from 'src/app/shared/utils/pokedexes.utils';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
})
export class GamesComponent {
  public urlValue: string = '';
  public formattedVersionGroupName: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.urlValue = params.get('slug') || '';
      this.formattedVersionGroupName = getFormattedVersionGroupName(
        this.urlValue
      );
    });
  }

  getFormattedPokedexName(pokedexName: string): string {
    return getFormattedPokedexName(pokedexName);
  }
}
