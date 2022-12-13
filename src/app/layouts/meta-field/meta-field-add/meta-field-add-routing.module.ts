import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaFieldAddComponent } from './meta-field-add.component';

const routes: Routes = [
  {
    path:"",
    component:MetaFieldAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetaFieldAddRoutingModule { }
