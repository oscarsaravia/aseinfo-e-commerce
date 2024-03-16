import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}
  mobileMenuVisible = false;

  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
    console.log(
      `Mobile menu is now ${this.mobileMenuVisible ? 'visible' : 'hidden'}`
    );
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
