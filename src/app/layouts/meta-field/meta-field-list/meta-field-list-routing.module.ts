import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaFieldListComponent } from './meta-field-list.component';

const routes: Routes = [
  {
    path:'',
    component:MetaFieldListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetaFieldListRoutingModule { }
