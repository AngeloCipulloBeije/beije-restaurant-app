import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterLink, RouterLinkActive],
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
}
