import { Component, Input } from '@angular/core';

@Component({
  selector: 'dd-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];

  // Add any additional properties or methods here
}
