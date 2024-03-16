import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimetersToFeetAndInchesPipe } from './pipes/decimeters-to-feet-and-inches/decimeters-to-feet-and-inches.pipe';
import { DecimetersToPoundsPipe } from './pipes/decimeters-to-pounds/decimeters-to-pounds.pipe';
import { FormsModule } from '@angular/forms';
import { TypeBoxComponent } from './components/type-box/type-box.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { PokedexSelectDropdownComponent } from './components/pokedex-select-dropdown/pokedex-select-dropdown.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroChevronDownSolid } from '@ng-icons/heroicons/solid';
import { CardComponent } from './components/card/card/card.component';
import { ButtonComponent } from './components/button/button/button.component';
import { NewsPreviewComponent } from './components/news-preview/news-preview.component';
import { NewsPreviewListComponent } from './components/news-preview-list/news-preview-list.component';
import { CompoundButtonComponent } from './components/button/compound-button/compound-button.component';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  declarations: [
    DecimetersToFeetAndInchesPipe,
    DecimetersToPoundsPipe,
    TypeBoxComponent,
    NewsPreviewComponent,
    DropdownComponent,
    PokedexSelectDropdownComponent,
    ButtonComponent,
    CompoundButtonComponent,
    CardComponent,
    CardHeaderComponent,
    NewsPreviewListComponent,
    SpinnerComponent,
    SwitchComponent,
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
    DropdownComponent,
    PokedexSelectDropdownComponent,
    NewsPreviewComponent,
    ButtonComponent,
    CompoundButtonComponent,
    CardComponent,
    CardHeaderComponent,
    NewsPreviewListComponent,
    SpinnerComponent,
    SwitchComponent,
  ],
})
export class SharedModule {}
