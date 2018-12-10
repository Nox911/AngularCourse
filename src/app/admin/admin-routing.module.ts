import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent, DashboardComponent, SomethingCoolComponent } from './components';
import { AuthGuard } from './../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          {
            path: 'products',
            component: ManageProductsComponent
          },
          {
            path: 'something-cool',
            component: SomethingCoolComponent
          },
          {
            path: '',
            component: DashboardComponent
          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const adminRouterComponents = [AdminComponent, DashboardComponent, ManageProductsComponent, SomethingCoolComponent];
