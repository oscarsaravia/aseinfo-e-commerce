import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HomeScreenComponent } from './features/home-screen/home-screen.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeScreenComponent,
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}
}
