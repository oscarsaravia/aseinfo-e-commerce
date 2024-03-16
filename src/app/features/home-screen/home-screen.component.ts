import { Component } from '@angular/core';
import { HeroImageComponent } from '../hero-image/hero-image.component';
import { Product } from '../../shared/interfaces';
import { FakeStoreApiService } from '../../services/fake-store-api.service';
import { MasonryGridComponent } from '../masonry-grid/masonry-grid.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [HeroImageComponent, MasonryGridComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css',
})
export class HomeScreenComponent {
  constructor(private fakeStoreApiService: FakeStoreApiService) {}
  productList: Product[] = [];
  categoriesList: string[] = [];

  ngOnInit() {
    this.fakeStoreApiService.fetchProducts(50).subscribe({
      next: (products) => {
        this.productList = products;
      },
      error: (err) => {
        console.error(`Error fetching products: ${err}`);
      },
    });
    this.fakeStoreApiService.fetchCategories().subscribe({
      next: (categories) => {
        this.categoriesList = categories;
      },
      error: (err) => {
        console.error(`Error fetching categories: ${err}`);
      },
    });
  }
}
