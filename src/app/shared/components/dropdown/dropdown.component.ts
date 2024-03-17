import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { DropdownSection } from 'src/app/core/models';

@Component({
  selector: 'dd-dropdown',
  templateUrl: './dropdown.component.html',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0.95)',
        })
      ),
      transition('void <=> *', animate('100ms ease-in-out')),
    ]),
  ],
})
export class DropdownComponent implements OnDestroy {
  @Input() sections: DropdownSection[] = [];
  @Input() placeholder: string = '';
  showDropdown: boolean = false;
  routerSubscription: Subscription;

  constructor(private eRef: ElementRef, private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.showDropdown = false;
      });
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
