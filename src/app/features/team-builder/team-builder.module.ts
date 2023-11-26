import { NgModule } from '@angular/core';
import { TeamBuilderComponent } from './pages/team-builder.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TeamBuilderComponent],
  imports: [CommonModule, CoreModule, SharedModule, AppRoutingModule],
})
export class TeamBuilderModule {}
