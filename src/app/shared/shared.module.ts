import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimetersToFeetAndInchesPipe } from './pipes/decimeters-to-feet-and-inches/decimeters-to-feet-and-inches.pipe';
import { DecimetersToPoundsPipe } from './pipes/decimeters-to-pounds/decimeters-to-pounds.pipe';
import { FormsModule } from '@angular/forms';
import { TypeBoxComponent } from './components/type-box/type-box.component';
import { HeaderDropdownItemComponent } from './components/header-dropdown-item/header-dropdown-item.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DropdownLinkComponent } from './components/dropdown-link/dropdown-link.component';
import { PokedexSelectDropdownComponent } from './components/pokedex-select-dropdown/pokedex-select-dropdown.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroChevronDownSolid } from '@ng-icons/heroicons/solid';
import { CardComponent } from './components/card/card/card.component';
import { ButtonComponent } from './components/button/button/button.component';
import { NewsPreviewComponent } from './components/news-preview/news-preview.component';
import { NewsPreviewListComponent } from './components/news-preview-list/news-preview-list.component';
import { CompoundButtonComponent } from './components/button/compound-button/compound-button.component';

@NgModule({
  declarations: [
    DecimetersToFeetAndInchesPipe,
    DecimetersToPoundsPipe,
    TypeBoxComponent,
    NewsPreviewComponent,
    DropdownLinkComponent,
    PokedexSelectDropdownComponent,
    HeaderDropdownItemComponent,
    ButtonComponent,
    CompoundButtonComponent,
    CardComponent,
    CardHeaderComponent,
    NewsPreviewListComponent,
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
    PokedexSelectDropdownComponent,
    NewsPreviewComponent,
    ButtonComponent,
    CompoundButtonComponent,
    CardComponent,
    CardHeaderComponent,
    NewsPreviewListComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
