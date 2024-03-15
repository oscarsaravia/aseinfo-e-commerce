import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileMenuVisible = false;

  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
    console.log(`Mobile menu is now ${this.mobileMenuVisible ? 'visible' : 'hidden'}`);
  }

}
