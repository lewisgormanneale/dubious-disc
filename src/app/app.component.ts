import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  themeSubscription: Subscription = new Subscription();

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService.isDarkTheme.subscribe((dark) => {
      if (dark) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
