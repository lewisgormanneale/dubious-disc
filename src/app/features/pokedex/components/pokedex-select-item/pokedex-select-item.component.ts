import { Component, Input } from '@angular/core';
import { Tables } from 'src/app/core/models';

@Component({
  selector: 'app-pokedex-select-item',
  templateUrl: './pokedex-select-item.component.html',
})
export class PokedexSelectItemComponent {
  @Input() versionGroup: Tables<'version_groups'> =
    {} as Tables<'version_groups'>;
  versionGroupSlug: string = '';
  versionGroupName: string = '';

  ngOnInit(): void {
    this.versionGroupSlug = this.versionGroup.identifier;
    this.versionGroupName = this.versionGroup.name;
  }
}
