import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FakeStoreApiService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://fakestoreapi.com/products';

  fetchProducts(limit = 20): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}?limit=${limit}`);
  }

  fetchCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/categories`);
  }
}
