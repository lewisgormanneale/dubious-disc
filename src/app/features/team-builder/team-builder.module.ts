import { NgModule } from '@angular/core';
import { TeamBuilderComponent } from './pages/team-builder.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';

const routes = [{ path: '', component: TeamBuilderComponent }];

@NgModule({
  declarations: [TeamBuilderComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class TeamBuilderModule {}
