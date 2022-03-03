import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElememtsHomeComponent } from './elememts-home/elememts-home.component';


@NgModule({
  declarations: [
    ElememtsHomeComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [ElememtsHomeComponent]
})
export class ElementsModule { }
