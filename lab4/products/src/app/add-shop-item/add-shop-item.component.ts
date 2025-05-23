import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-shop-item',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-shop-item.component.html',
  styleUrls: ['./add-shop-item.component.css']
})
export class AddShopItemComponent {
  newItem = {
    name: '',
    shortDescription: '',
    description: '',
    price: 0,
    rating: 0,
    imageLink: '',
    productLink: ''
  };

  // id: number;
  //   name: string;
  //   shortDescription: string;
  //   description: string;
  //   price: string;
  //   imageLink: string;
  //   rating: number;
  //   productLink: string;

  constructor(private http: HttpClient) {}

  addShopItem() {
    this.http.post('http://localhost:3000/items', this.newItem).subscribe(response => {
      console.log('Item was added');
    });
  }
}
