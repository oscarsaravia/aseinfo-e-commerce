import { Component, Input } from '@angular/core';
import { heroProperties } from '../../shared/constants';

@Component({
  selector: 'app-hero-image',
  standalone: true,
  imports: [],
  templateUrl: './hero-image.component.html',
  styleUrl: './hero-image.component.css',
})
export class HeroImageComponent {
  @Input() title: string = heroProperties.title;
  @Input() description: string = heroProperties.description;
  @Input() buttonText: string = heroProperties.buttonText;
  @Input() buttonLink: string = heroProperties.buttonLink;
  @Input() imageUrl: string = heroProperties.imageUrl;
  navigateTo() {
    const elementToScroll = document?.getElementById(this.buttonLink);
    if (!elementToScroll) {
      return;
    }
    elementToScroll.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
