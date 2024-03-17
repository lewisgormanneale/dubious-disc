import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from 'src/app/core/models';

@Component({
  selector: 'dd-tab-list',
  templateUrl: './tab-list.component.html',
})
export class TabListComponent {
  @Input() tabs: Tab[] = [];
  @Input() activeTab: Tab = this.tabs[0];
  @Output() tabChange: EventEmitter<Tab> = new EventEmitter<Tab>();

  selectTab(tab: Tab) {
    this.activeTab = tab;
    this.tabChange.emit(tab);
  }
}
