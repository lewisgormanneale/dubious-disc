import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';
import { QuickLinkComponent } from './components/quick-link/quick-link.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, QuickLinkComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
