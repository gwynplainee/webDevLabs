import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopItemComponent } from '../shop-item/shop-item.component';
import { ShopItem } from '../shop-item';
import { ShoppingService } from '../shopping.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule, ShopItemComponent, HttpClientModule],
  template: `
    <div class="category-page">
      <h2>Category: {{ categoryName }}</h2>
      
      <div class="results">
        <app-shop-item *ngFor="let shopItem of filteredItems" [shopItem]="shopItem" (itemRemoved)="onItemRemoved($event)"></app-shop-item>
      </div>
    </div>
  `,
  styles: [`
    .category-page {
    margin: 20px auto;
    padding: 20px;
    max-width: 1600px;
    background-color: var(--accent-color);
    border-radius: 8px;
    box-shadow: 0 4px 8px var(--shadow-color);
    text-align: center;
  }

  .category-page h2 {
    color: var(--primary-color);
    font-size: 1.8em;
    margin-bottom: 15px;
  }

  .results {
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    padding: 20px;
    justify-content: center;
    align-items: stretch;
  }

  .results app-shop-item {
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .results app-shop-item:hover {
    transform: scale(1.05);
  }
  `]
})
export class CategoryPageComponent {
  itemList: ShopItem[] = [];
  categoryName: string = '';
  filteredItems: ShopItem[] = [];

  constructor(private route: ActivatedRoute, private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('categoryName') || '';
      console.log('Category Name:', this.categoryName); 
      this.loadItems();
    });
  }

  loadItems() {
    this.shoppingService.getAllShopItems().then((items: ShopItem[]) => {
      this.filteredItems = items.filter(item => item.category === this.categoryName);
    });
  }

  onItemRemoved(id: number): void {
    this.filteredItems = this.filteredItems.filter(item => item.id !== id); 
  }

  
}
