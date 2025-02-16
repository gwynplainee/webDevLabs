import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute }from '@angular/router';
import { ShoppingService } from '../shopping.service';
import { ShopItem } from '../shop-item';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        class="item-photo"
        [src]="shopItem?.imageLink"
        alt="Image of {{ shopItem?.name }}"
        crossorigin
      />
      <section class="item-description">
        <h2 class="item-heading">{{ shopItem?.name }}</h2>
        <p class="description">{{shopItem?.description}}</p>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  shoppingService = inject(ShoppingService);
  shopItem: ShopItem | undefined;
  

  constructor(){
    const shopItemId = parseInt(this.route.snapshot.params['id'], 10);
    this.shoppingService.getShopItemById(shopItemId).then((shopItem) => {
      this.shopItem = shopItem;
    });
    
  }

}
