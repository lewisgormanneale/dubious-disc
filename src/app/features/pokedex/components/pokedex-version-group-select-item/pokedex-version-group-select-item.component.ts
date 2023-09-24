import { Component, Input } from '@angular/core';
import { VersionGroup } from 'src/app/core/models';
import { getFormattedVersionGroupName } from 'src/app/shared/utils/games.utils';

@Component({
  selector: 'app-pokedex-version-group-select-item',
  templateUrl: './pokedex-version-group-select-item.component.html',
  styleUrls: ['./pokedex-version-group-select-item.component.css'],
})
export class PokedexVersionGroupSelectItemComponent {
  @Input() versionGroup: VersionGroup = {} as VersionGroup;
  versionGroupSlug: string = '';
  versionGroupName: string = '';
  constructor() {}

  ngOnInit(): void {
    this.versionGroupSlug = this.versionGroup.name;
    this.versionGroupName = getFormattedVersionGroupName(
      this.versionGroup.name
    );
  }
}
