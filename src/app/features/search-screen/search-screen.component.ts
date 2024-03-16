import { Component } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { MasonryGridComponent } from '../masonry-grid/masonry-grid.component';
import { FakeStoreApiService } from '../../services/fake-store-api.service';
import { Product } from '../../shared/interfaces';

@Component({
  selector: 'app-search-screen',
  standalone: true,
  imports: [SearchInputComponent, MasonryGridComponent],
  templateUrl: './search-screen.component.html',
  styleUrl: './search-screen.component.css',
})
export class SearchScreenComponent {
  constructor(private fakeStoreApiService: FakeStoreApiService) {}
  inputValue = '';
  productList: Product[] = [];
  filteredList: Product[] = [];
  ngOnInit() {
    console.log(`Fetching products...`);
    this.inputValue = '';
    this.fakeStoreApiService.fetchProducts(50).subscribe({
      next: (products) => {
        this.productList = products;
        this.filteredList = products;
      },
      error: (err) => {
        console.error(`Error fetching products: ${err}`);
      },
    });
  }

  onInputValueChange(value: string) {
    if (value.trim() === '') {
      // Si el valor del input está vacío, restaurar la lista original de productos
      this.filteredList = [...this.productList];
    } else {
      // Aplicar el filtro según el nuevo valor del input
      this.filteredList = this.productList.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
    }
  }
}
