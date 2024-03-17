import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from 'src/app/core/models';

@Component({
  selector: 'dd-tab-list',
  templateUrl: './tab-list.component.html',
})
export class TabListComponent {
  @Input() tabs: Tab[] = []; // Array of tab names
  @Input() activeTab: Tab = this.tabs[0]; // Currently active tab
  @Output() tabChange: EventEmitter<Tab> = new EventEmitter<Tab>(); // Event emitter for tab change

  // Method to handle tab selection
  selectTab(tab: Tab) {
    this.activeTab = tab;
    this.tabChange.emit(tab);
    console.log('Tab selected: ', tab);
  }
}
