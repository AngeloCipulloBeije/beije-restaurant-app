import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { InfoCardComponent } from '../../components/info-card/info-card.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    HeroComponent,
    InfoCardComponent,
    WelcomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
    { title: 'Master Chefs', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'person-fill' },
    { title: 'Quality Food', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'cart-plus-fill' },
    { title: 'Online Order', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'cart-plus-fill' },
    { title: '24/7 Service', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'headset' },
  ]
}
