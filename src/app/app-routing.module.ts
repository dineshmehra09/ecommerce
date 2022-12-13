import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CheckRouteGuard } from './shared/guard/check-route.guard';
// import { CheckRouteGuard } from './shared/guard/check-route.guard';
const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'membership',
        pathMatch: 'full',
      },
      // {
      //   path: 'page-not-found',
      //   loadChildren: () =>
      //     import('./layouts/not-found/not-found.module').then(
      //       (m) => m.NotFoundModule
      //     ),
      // },
      {
        path: 'membership',
        canActivate: [CheckRouteGuard],
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                './layouts/meta-field/meta-field-list/meta-field-list.module'
              ).then((m) => m.MetaFieldListModule),
          },
          {
            path: 'create',
            loadChildren: () =>
              import(
                './layouts/meta-field/meta-field-add/meta-field-add.module'
              ).then((m) => m.MetaFieldAddModule),
          },
          {
            path: 'view',
            loadChildren: () =>
              import(
                './layouts/meta-field/meta-field-view/meta-field-view.module'
              ).then((m) => m.MetaFieldViewModule),
          },
          {
            path: 'update',
            loadChildren: () =>
              import(
                './layouts/meta-field/meta-field-update/meta-field-update.module'
              ).then((m) => m.MetaFieldUpdateModule),
          },
        ],
      },
      {
        path: '**',
        redirectTo: '/page-not-found',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
