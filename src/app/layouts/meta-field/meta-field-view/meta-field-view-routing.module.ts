import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaFieldViewComponent } from './meta-field-view.component';

const routes: Routes = [
  {
    path:'',
    component:MetaFieldViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetaFieldViewRoutingModule { }
