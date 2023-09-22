import { Component, Input } from '@angular/core';
import { PokedexVersion, VersionGroup } from 'src/app/core/models';

@Component({
  selector: 'app-pokedex-version-select-item',
  templateUrl: './pokedex-version-select-item.component.html',
  styleUrls: ['./pokedex-version-select-item.component.scss'],
})
export class PokedexVersionSelectItemComponent {
  @Input() versionGroup: VersionGroup = {} as VersionGroup;
  constructor() {}
}
