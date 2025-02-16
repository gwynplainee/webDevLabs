import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopItemComponent } from '../shop-item/shop-item.component';
import { ShopItem } from '../shop-item';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ShopItemComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by name" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-shop-item *ngFor="let shopItem  of filteredItemList" [shopItem]="shopItem"></app-shop-item>
    </section>
  `,
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  itemList: ShopItem[] = [];
  housingService: ShoppingService = inject(ShoppingService);
  filteredItemList : ShopItem[] = [];

  constructor(){
    this.housingService.getAllShopItems().then((itemList: ShopItem[]) => {
      this.itemList = itemList;
      this.filteredItemList = itemList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredItemList = this.itemList;
      return;
    }
    this.filteredItemList = this.itemList.filter((shopItem) =>
      shopItem?.name.toLowerCase().includes(text.toLowerCase()),
    );
  }

  

}
