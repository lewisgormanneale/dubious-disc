import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CoreModule, SharedModule, AppRoutingModule],
})
export class HomeModule {}
