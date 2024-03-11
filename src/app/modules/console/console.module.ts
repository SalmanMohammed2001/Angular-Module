import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { ConsoleHeaderComponent } from './component/console-header/console-header.component';
import { ConsoleFooterComponent } from './component/console-footer/console-footer.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    ConsoleHeaderComponent,
    ConsoleFooterComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }
