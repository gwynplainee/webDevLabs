import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-shop-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="category" (click)="goToCategory()">
      <h2>{{ categoryName }}</h2>
    </div>
  `,
  styles: [`.category {
    margin-bottom: 20px;
    padding: 15px;
    background-color: var(--accent-color);
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    box-shadow: 0px 4px 6px var(--shadow-color);
    font-weight: bold;
    color: var(--primary-color);
    max-width: 800px;
    min-width: 300px
}

.category:hover {
    background-color: var(--secondary-color);
    color: white;
    transform: scale(1.05);
}

.category h2 {
    font-size: 25px;
    margin: 0;
}`]
})
export class ShopCategoryComponent {
  @Input() categoryName: string = '';

  constructor(private router: Router) {}

  goToCategory() {
    this.router.navigate(['/category', this.categoryName]);
  }
}
