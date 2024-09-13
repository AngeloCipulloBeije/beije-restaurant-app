import { Component, HostListener } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faBarsStaggered, faHamburger, faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterLink, RouterLinkActive, FaIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  routes = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'service', label: 'Service' },
    { path: 'menu', label: 'Menu' },
    { path: 'contact', label: 'Contact' }
  ]

  foodIcon = faUtensils;
  hambIcon = faBars;
  showFixedHeader: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollTop > 100) {
      this.showFixedHeader = true;
    } else {
      this.showFixedHeader = false;
    }
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
