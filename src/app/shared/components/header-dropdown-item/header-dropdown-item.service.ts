import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderDropdownItemService {
  private openDropdown = new Subject<string>();

  getOpenDropdown() {
    return this.openDropdown.asObservable();
  }

  setOpenDropdown(label: string) {
    this.openDropdown.next(label);
  }
}
