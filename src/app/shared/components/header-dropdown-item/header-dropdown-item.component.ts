import {
  Component,
  HostListener,
  Input,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationItem } from 'src/app/core/models';
import { HeaderDropdownItemService } from './header-dropdown-item.service';
@Component({
  selector: 'app-header-dropdown-item',
  templateUrl: './header-dropdown-item.component.html',
})
export class HeaderDropdownItemComponent implements OnInit, OnDestroy {
  @Input() navItem!: NavigationItem;
  isHovered = false;
  isOpen = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private headerDropdownItemService: HeaderDropdownItemService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.subscription = this.headerDropdownItemService
      .getOpenDropdown()
      .subscribe((label) => {
        if (label !== this.navItem.label) {
          this.isOpen = false;
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.headerDropdownItemService.setOpenDropdown(this.navItem.label);
    }
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
