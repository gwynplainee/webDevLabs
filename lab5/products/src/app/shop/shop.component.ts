import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCategoryComponent } from '../shop-category/shop-category.component';
import { ShopItem } from '../shop-item';
import { ShoppingService } from '../shopping.service';

interface ShopCategory {
  name: string;
  items: ShopItem[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ShopCategoryComponent],
  template: `
    <section class="categories">
      <app-shop-category
        *ngFor="let category of categoryList"
        [categoryName]="category.name"
        >
      </app-shop-category>
    </section>
  `,
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categoryList: ShopCategory[] = [];
  
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.shoppingService.getAllShopItems().then((itemList: ShopItem[]) => {
      this.categoryList = this.groupItemsByCategory(itemList);
    });
  }

  private groupItemsByCategory(items: ShopItem[]): ShopCategory[] {
    const allowedCategories = ['Phones', 'Computers accessories', 'Home Appliances', 'Video Equipment'];
    const categoriesMap = new Map<string, ShopItem[]>();

    items.forEach(item => {
      if (allowedCategories.includes(item.category)) {
        if (!categoriesMap.has(item.category)) {
          categoriesMap.set(item.category, []);
        }
        categoriesMap.get(item.category)!.push(item);
      }
    });

    return allowedCategories.map(name => ({
      name,
      items: categoriesMap.get(name) || []
    }));
  }
}
