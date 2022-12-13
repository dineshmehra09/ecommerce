import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetaFieldUpdateComponent } from './meta-field-update.component';

const routes: Routes = [
  {
    path:'',
    component:MetaFieldUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetaFieldUpdateRoutingModule { }
