import { Injectable } from '@angular/core';
import { ShopItem } from './shop-item';

@Injectable({
  providedIn: 'root'
})

export class ShoppingService {
  url = 'http://localhost:3000/items';

  async getAllShopItems(): Promise<ShopItem[]> {
    const data = await fetch(this.url);
    console.log(data.json);
    return (await data.json()) ?? [];
  }

  async getShopItemById(id: number): Promise<ShopItem | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Shop application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
