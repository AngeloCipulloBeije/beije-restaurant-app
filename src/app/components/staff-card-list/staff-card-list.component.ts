import { Component } from '@angular/core';
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-staff-card-list',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './staff-card-list.component.html',
  styleUrl: './staff-card-list.component.css'
})
export class StaffCardListComponent {

  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faX = faX;

  cards = [
    { name: 'Chef 1', role: 'Ruolo', imgUrl: 'https://themewagon.github.io/restoran/img/team-1.jpg' },
    { name: 'Chef 2', role: 'Ruolo', imgUrl: 'https://themewagon.github.io/restoran/img/team-2.jpg' },
    { name: 'Chef 3', role: 'Ruolo', imgUrl: 'https://themewagon.github.io/restoran/img/team-3.jpg' },
    { name: 'Chef 4', role: 'Ruolo', imgUrl: 'https://themewagon.github.io/restoran/img/team-4.jpg' },
  ]
}
