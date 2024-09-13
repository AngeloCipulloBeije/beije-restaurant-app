import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { InfoCardComponent } from '../../components/info-card/info-card.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { TabsMenuComponent } from '../../components/tabs-menu/tabs-menu.component';
import { StaffCardListComponent } from '../../components/staff-card-list/staff-card-list.component';
import { InfoCardListComponent } from '../../components/info-card-list/info-card-list.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { ContentFormComponent } from '../../components/content-form/content-form.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    HeroComponent,
    InfoCardComponent,
    WelcomeComponent,
    TabsMenuComponent,
    StaffCardListComponent,
    InfoCardListComponent,
    ReviewsComponent, 
    ContentFormComponent,
    FaIconComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  playIcon = faPlay;

  data = [
    { title: 'Master Chefs', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'person-fill' },
    { title: 'Quality Food', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'cart-plus-fill' },
    { title: 'Online Order', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'cart-plus-fill' },
    { title: '24/7 Service', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'headset' },
  ]
}
