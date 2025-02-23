import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopItem } from '../shop-item';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shop-item',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  template: `
    <section class="item" *ngIf="shopItem">
      <h2>
        <a class="item-link" [href]="shopItem.productLink">
          {{ shopItem.name }}
        </a>
      </h2>
      <img
        class="item-image"
        [src]="shopItem.imageLink"
        alt="Image of {{ shopItem.name }}"
        crossorigin
      />
      <p class="price">Price: {{ shopItem.price }} ₸</p>
      <p class="rating">Rating: {{ shopItem.rating }}</p>
      <p class="shortDescription">{{ shopItem.shortDescription }}</p>
      <p class="likes">❤️ Likes: {{ shopItem.likes }}</p>

      <div class="button-group">
      <button
        type="button"
        (click)="toggleLike()"
        [ngClass]="{ 'liked': userLiked }"
        class="like-button"
      >
        {{ userLiked ? 'Unlike ❌' : 'Like ❤️' }}
      </button>
      <button type="button" (click)="sharing(shopItem.productLink)" class="share-buttons">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
        </svg>
        Share
      </button>
      </div>
      

      <button type="button" (click)="removeItem()" class="remove-button">
        Remove
      </button>

      <a [routerLink]="'/details/' + shopItem.id" class="details-link">Узнать больше</a>
    </section>
  `,
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent {
  @Input() shopItem?: ShopItem;
  @Output() itemRemoved = new EventEmitter<number>(); 
  private http = inject(HttpClient);
  userLiked: boolean = false;

  sharing(productLink?: string): void {
    if (!productLink) return;
    const encodedLink = encodeURIComponent(productLink);
    const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
    window.open(telegramShareUrl, '_blank');
  }

  removeItem(): void {
    if (!this.shopItem) return;

    this.http.delete(`http://localhost:3000/items/${this.shopItem.id}`).subscribe(() => {
      this.itemRemoved.emit(this.shopItem!.id); 
    });
  }

  toggleLike(): void {
    if (!this.shopItem) return;

    const updatedLikes = this.userLiked
      ? this.shopItem.likes - 1 
      : this.shopItem.likes + 1; 

    this.http.patch(`http://localhost:3000/items/${this.shopItem.id}`, { likes: updatedLikes })
      .subscribe(() => {
        this.shopItem!.likes = updatedLikes; 
        this.userLiked = !this.userLiked; 
      }, error => console.error('Error updating likes:', error));
  }
}
