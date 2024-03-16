import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../shared/interfaces';

@Component({
  selector: 'app-masonry-grid',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './masonry-grid.component.html',
  styleUrl: './masonry-grid.component.css',
})
export class MasonryGridComponent {
  @Input() productList: Product[] = [];
  @Input() gridTitle: string = 'Sample title';
  @Input() hasTitle: boolean = false;
}
