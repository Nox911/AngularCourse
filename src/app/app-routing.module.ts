import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
    // {
    //     path: 'about',
    //     component: AboutComponent
    // },
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'admin',
    //     canLoad: [AuthGuard],
    //     loadChildren: './admin/admin.module#AdminModule'
    // },
    // {
    //     path: 'users',
    //     data: { preload: true },
    //     loadChildren: './users/users.module#UsersModule'
    // },

    // {
    //     path: 'messages',
    //     component: MessagesComponent,
    //     outlet: 'messages'
    // },
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
    // {
    //     // The router will match this route if the URL requested
    //     // doesn't match any paths for routes defined in our configuration
    //     path: '**',
    //     component: PathNotFoundComponent
    // }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
        exports: [RouterModule]
})
export class AppRoutingModule {}
