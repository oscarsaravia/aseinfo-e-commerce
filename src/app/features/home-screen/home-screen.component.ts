import { Component } from '@angular/core';
import { HeroImageComponent } from '../hero-image/hero-image.component';
import { Product } from '../../shared/interfaces';
import { FakeStoreApiService } from '../../services/fake-store-api.service';
import { MasonryGridComponent } from '../masonry-grid/masonry-grid.component';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

interface Filtro {
  name: string;
}

interface FiltroLimite {
  name: number;
}

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [
    HeroImageComponent,
    MasonryGridComponent,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
  ],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css',
})
export class HomeScreenComponent {
  constructor(private fakeStoreApiService: FakeStoreApiService) {}
  productList: Product[] = [];
  filteredProductList: Product[] = [];
  categoriesList: string[] = [];

  filtros: Filtro[] | undefined;
  filtrosLimite: FiltroLimite[] | undefined;
  formGroup: FormGroup;
  formGroupLimit: FormGroup;
  selectedFilter: Filtro | undefined;
  selectedLimitFilter: FiltroLimite | undefined;

  ngOnInit() {
    this.filtros = [
      { name: 'Precio menor a mayor' },
      { name: 'Precio mayor a menor' },
      { name: 'A-Z' },
      { name: 'Z-A' },
    ];
    this.filtrosLimite = [
      { name: 5 },
      { name: 10 },
      { name: 15 },
      { name: 20 },
    ];
    this.fakeStoreApiService.fetchProducts(50).subscribe({
      next: (products) => {
        this.productList = products;
        this.filteredProductList = products;
      },
      error: (err) => {
        console.error(`Error fetching products: ${err}`);
      },
    });
    this.fakeStoreApiService.fetchCategories().subscribe({
      next: (categories) => {
        this.categoriesList = categories;
        for (const category of categories) {
          this.filtros?.push({ name: category });
        }
      },
      error: (err) => {
        console.error(`Error fetching categories: ${err}`);
      },
    });

    this.formGroup = new FormGroup({
      selectedFilter: new FormControl<Filtro | null>(null),
    });
    this.formGroupLimit = new FormGroup({
      selectedLimitFilter: new FormControl<FiltroLimite | null>(null),
    });
  }

  filterProductsByPriceAsc() {
    this.filteredProductList = this.productList.sort(
      (a, b) => a.price - b.price
    );
  }

  filterProductsByPriceDesc() {
    this.filteredProductList = this.productList.sort(
      (a, b) => b.price - a.price
    );
  }

  filterProductsByCategory(category: string) {
    console.log(`Filtering products by category: ${category}`);
    this.filteredProductList = this.productList.filter(
      (product) => product.category === category
    );
    console.log(`Result: ${this.filteredProductList.length} products found`);
  }

  filterByAlphabeticalOrderAsc() {
    this.filteredProductList = this.productList.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  filterByAlphabeticalOrderDesc() {
    this.filteredProductList = this.productList.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  onChange(event: DropdownChangeEvent) {
    switch (event.value.name) {
      case 'Precio menor a mayor':
        this.filterProductsByPriceAsc();
        break;
      case 'Precio mayor a menor':
        this.filterProductsByPriceDesc();
        break;
      case 'A-Z':
        this.filterByAlphabeticalOrderAsc();
        break;
      case 'Z-A':
        this.filterByAlphabeticalOrderDesc();
        break;
      default:
        this.filterProductsByCategory(event.value.name);
        break;
    }
  }

  onLimitChange(event: DropdownChangeEvent) {
    this.filteredProductList = this.productList.slice(0, event.value.name);
  }
}
