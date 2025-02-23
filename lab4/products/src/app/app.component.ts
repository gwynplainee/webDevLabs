import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AddShopItemComponent } from "./add-shop-item/add-shop-item.component";


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
      </svg>
      <h1>Ardak's Shop</h1>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>

      <section class="adding-item">
        <app-add-shop-item></app-add-shop-item>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [ShopComponent, RouterModule, AddShopItemComponent]
})
export class AppComponent {
  title = 'products';
}
