import { Component, Input } from '@angular/core';

interface TableColumn {
  label: string;
  property: string;
}

@Component({
  selector: 'dd-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];

  // Add any additional properties or methods here
}
