import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCategoryComponent } from './shop-category.component';

describe('ShopCategoryComponent', () => {
  let component: ShopCategoryComponent;
  let fixture: ComponentFixture<ShopCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
