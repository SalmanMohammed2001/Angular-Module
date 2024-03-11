import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StraterMainSliderComponent } from './componet/starter-home-context/inner-item/strater-main-slider/strater-main-slider.component';
import { StarterFooterComponent } from './componet/starter-footer/starter-footer.component';
import { StarterHeaderComponent } from './componet/starter-header/starter-header.component';
import { StraterMainServicesComponent } from './componet/starter-home-context/inner-item/strater-main-services/strater-main-services.component';
import { StarterPricingComponent } from './componet/starter-pricing/starter-pricing.component';
import { StarterHomeContextComponent } from './componet/starter-home-context/starter-home-context.component';



@NgModule({
  declarations: [
    StarterComponent,
    StraterMainSliderComponent,
    StarterFooterComponent,
    StarterHeaderComponent,
    StraterMainServicesComponent,
    StarterPricingComponent,
    StarterHomeContextComponent,


  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
