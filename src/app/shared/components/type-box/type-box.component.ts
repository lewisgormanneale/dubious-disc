import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-box',
  templateUrl: './type-box.component.html',
})
export class TypeBoxComponent {
  @Input() type: any = {} as any;
}
