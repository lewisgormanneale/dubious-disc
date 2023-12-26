import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimetersToFeetAndInchesPipe } from './pipes/decimeters-to-feet-and-inches/decimeters-to-feet-and-inches.pipe';
import { DecimetersToPoundsPipe } from './pipes/decimeters-to-pounds/decimeters-to-pounds.pipe';
import { GenderRatioComponent } from './components/gender-ratio/gender-ratio.component';
import { DescriptionsComponent } from './components/descriptions/descriptions.component';
import { TypeBoxComponent } from './components/type-box/type-box.component';
import { StatsComponent } from './components/stats/stats.component';
import { FormsModule } from '@angular/forms';
import { DataComponent } from './components/data/data.component';
import { HeaderDropdownItemComponent } from './components/header-dropdown-item/header-dropdown-item.component';
import { PostCardComponent } from './components/news-card/news-card.component';
import { ContainerHeaderComponent } from './components/container-header/container-header.component';
import { Router, RouterModule } from '@angular/router';
import { NewsContainerComponent } from './components/news-container/news-container.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    DecimetersToFeetAndInchesPipe,
    DecimetersToPoundsPipe,
    GenderRatioComponent,
    DescriptionsComponent,
    TypeBoxComponent,
    StatsComponent,
    DataComponent,
    PostCardComponent,
    HeaderDropdownItemComponent,
    ContainerHeaderComponent,
    NewsContainerComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    DecimetersToFeetAndInchesPipe,
    DecimetersToPoundsPipe,
    GenderRatioComponent,
    DescriptionsComponent,
    TypeBoxComponent,
    StatsComponent,
    DataComponent,
    HeaderDropdownItemComponent,
    PostCardComponent,
    ContainerHeaderComponent,
    NewsContainerComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
