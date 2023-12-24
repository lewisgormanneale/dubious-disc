import { Component, Input } from '@angular/core';
import { VersionGroup } from 'src/app/core/models';
import { getFormattedVersionGroupName } from 'src/app/shared/utils/games.utils';

@Component({
  selector: 'app-pokedex-select-item',
  templateUrl: './pokedex-select-item.component.html',
})
export class PokedexSelectItemComponent {
  @Input() versionGroup: any = {};
  versionGroupSlug: string = '';
  versionGroupName: string = '';

  ngOnInit(): void {
    this.versionGroupSlug = this.versionGroup.identifier;
    this.versionGroupName = this.versionGroup.name;
  }
}
