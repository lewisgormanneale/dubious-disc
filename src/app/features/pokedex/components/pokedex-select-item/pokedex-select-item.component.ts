import { Component, Input } from '@angular/core';

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
