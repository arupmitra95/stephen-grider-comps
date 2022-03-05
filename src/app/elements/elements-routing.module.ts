import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElememtsHomeComponent } from './elememts-home/elememts-home.component';

const routes: Routes = [
  {path: "", component: ElememtsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
