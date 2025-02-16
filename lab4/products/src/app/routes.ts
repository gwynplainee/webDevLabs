import {Routes} from '@angular/router';
import {ShopComponent} from './shop/shop.component';
import {DetailsComponent} from './details/details.component';

const routeConfig : Routes = [
    {
        path: '',
        component: ShopComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Detail Page'
    }
];

export default routeConfig;