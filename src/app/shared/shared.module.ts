import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimetersToFeetAndInchesPipe } from './pipes/decimeters-to-feet-and-inches/decimeters-to-feet-and-inches.pipe';
import { DecimetersToPoundsPipe } from './pipes/decimeters-to-pounds/decimeters-to-pounds.pipe';
import { GenderRatioComponent } from './components/gender-ratio/gender-ratio.component';
import { TypeBackgroundGeneratorPipe } from './pipes/type-background-generator/type-background-generator.pipe';
import { DescriptionsComponent } from './components/descriptions/descriptions.component';
import { TypeBoxComponent } from './components/type-box/type-box.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    DecimetersToFeetAndInchesPipe,
    DecimetersToPoundsPipe,
    GenderRatioComponent,
    TypeBackgroundGeneratorPipe,
    DescriptionsComponent,
    TypeBoxComponent,
    StatsComponent,
  ],
  imports: [CommonModule],
  exports: [
    DecimetersToFeetAndInchesPipe,
    DecimetersToPoundsPipe,
    GenderRatioComponent,
    DescriptionsComponent,
    TypeBackgroundGeneratorPipe,
    TypeBoxComponent,
    StatsComponent,
  ],
})
export class SharedModule {}
