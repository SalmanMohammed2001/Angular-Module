import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import {StarterPricingComponent} from "./componet/starter-pricing/starter-pricing.component";
import {StarterHomeContextComponent} from "./componet/starter-home-context/starter-home-context.component";

const routes: Routes = [
  { path: '', component: StarterComponent ,children:[
      {path:'',redirectTo:'stater/home',pathMatch:'full'},
      {path:'home',component:StarterHomeContextComponent},
      {path:'pricing',component:StarterPricingComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
