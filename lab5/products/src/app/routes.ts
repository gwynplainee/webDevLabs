import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { DetailsComponent } from './details/details.component';
import { CategoryPageComponent } from './category-page/category-page.component';

const routeConfig: Routes = [
    {
        path: '',
        component: ShopComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Detail Page'
    },
    { 
        path: 'category/:categoryName', 
        component: CategoryPageComponent, 
        title: 'Category' 
    },
];

export default routeConfig;