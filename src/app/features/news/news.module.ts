import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './pages/news.component';

const routes = [{ path: '', component: NewsComponent }];

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class NewsModule {}
