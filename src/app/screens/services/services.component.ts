import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { InfoCardListComponent } from '../../components/info-card-list/info-card-list.component';
import { LayoutComponent } from '../../components/layout/layout.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [BreadcrumbComponent, InfoCardListComponent, LayoutComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  data = [
    { title: 'Master Chefs', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'person-fill' },
    { title: 'Quality Food', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'cart-plus-fill' },
    { title: 'Online Order', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'cart-plus-fill' },
    { title: '24/7 Service', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'headset' },
    { title: 'Master Chefs', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'person-fill' },
    { title: 'Quality Food', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'cart-plus-fill' },
    { title: 'Online Order', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'cart-plus-fill' },
    { title: '24/7 Service', description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon: 'headset' },
  ]
}
