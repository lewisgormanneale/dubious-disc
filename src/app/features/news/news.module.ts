import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './pages/news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, CoreModule, SharedModule, AppRoutingModule],
})
export class NewsModule {}
