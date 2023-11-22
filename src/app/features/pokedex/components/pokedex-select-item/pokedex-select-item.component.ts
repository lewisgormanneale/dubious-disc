import { Component, Input } from '@angular/core';
import { VersionGroup } from 'src/app/core/models';
import { getFormattedVersionGroupName } from 'src/app/shared/utils/games.utils';

@Component({
  selector: 'app-pokedex-select-item',
  templateUrl: './pokedex-select-item.component.html',
})
export class PokedexSelectItemComponent {
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
