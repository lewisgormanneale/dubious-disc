import { Component, Input } from '@angular/core';
import { Tables } from 'src/app/core/models';

@Component({
  selector: 'app-type-box',
  templateUrl: './type-box.component.html',
})
export class TypeBoxComponent {
  @Input() type: Tables<'types'> = {} as Tables<'types'>;
}
