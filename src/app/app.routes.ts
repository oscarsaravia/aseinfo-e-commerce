import { Routes } from '@angular/router';
import { HomeScreenComponent } from './features/home-screen/home-screen.component';
import { SearchScreenComponent } from './features/search-screen/search-screen.component';

export const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'search', component: SearchScreenComponent },
  { path: '**', redirectTo: '' },
];
