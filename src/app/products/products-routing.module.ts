import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent, ProductListComponent } from './components';
import { ReviewsComponent } from './components';

const routes: Routes = [
    {
        path: 'catalog',
        component: ProductListComponent
    },
    {
        path: 'reviews/:productId',
        component: ReviewsComponent,
        outlet: 'reviews'
    },
    {
        path: 'products/:productId',
        component: ProductFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
