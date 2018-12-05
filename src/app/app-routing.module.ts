import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathNotFoundComponent, AboutComponent, LoginComponent } from './layout';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        canLoad: [AuthGuard],
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: '',
        redirectTo: '/catalog',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PathNotFoundComponent,
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
