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
import { HeaderDropdownService } from './header-dropdown.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
@Component({
  selector: 'dd-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  standalone: true,
  imports: [CoreModule, CommonModule, RouterLink],
})
export class HeaderDropdownComponent implements OnInit, OnDestroy {
  @Input() navItem!: NavigationItem;
  isHovered = false;
  isOpen = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private headerDropdownService: HeaderDropdownService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.subscription = this.headerDropdownService
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
      this.headerDropdownService.setOpenDropdown(this.navItem.label);
    }
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
