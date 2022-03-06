import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElememtsHomeComponent } from './elememts-home/elememts-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ElememtsHomeComponent,
    PlaceHolderComponent,
    TimesDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  // exports: [TimesDirective]
})
export class ElementsModule { }
