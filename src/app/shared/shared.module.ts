import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimetersToFeetAndInchesPipe } from './pipes/decimeters-to-feet-and-inches/decimeters-to-feet-and-inches.pipe';
import { DecimetersToPoundsPipe } from './pipes/decimeters-to-pounds/decimeters-to-pounds.pipe';
import { FormsModule } from '@angular/forms';
import { TypeBoxComponent } from './components/type-box/type-box.component';
import { HeaderDropdownItemComponent } from './components/header-dropdown-item/header-dropdown-item.component';
import { PostCardComponent } from './components/news-card/news-card.component';
import { ContainerHeaderComponent } from './components/container-header/container-header.component';
import { RouterModule } from '@angular/router';
import { NewsContainerComponent } from './components/news-container/news-container.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DropdownLinkComponent } from './components/dropdown-link/dropdown-link.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroChevronDownSolid } from '@ng-icons/heroicons/solid';

@NgModule({
  declarations: [
    DecimetersToFeetAndInchesPipe,
    DecimetersToPoundsPipe,
    TypeBoxComponent,
    PostCardComponent,
    DropdownLinkComponent,
    HeaderDropdownItemComponent,
    ContainerHeaderComponent,
    NewsContainerComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgIconsModule.withIcons({
      heroChevronDownSolid,
    }),
  ],
  exports: [
    DecimetersToFeetAndInchesPipe,
    DecimetersToPoundsPipe,
    TypeBoxComponent,
    HeaderDropdownItemComponent,
    DropdownLinkComponent,
    PostCardComponent,
    ContainerHeaderComponent,
    NewsContainerComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
