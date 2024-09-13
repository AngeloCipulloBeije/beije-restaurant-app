import { Component, Input } from '@angular/core';
import { InfoCardComponent } from '../info-card/info-card.component';

@Component({
  selector: 'app-info-card-list',
  standalone: true,
  imports: [InfoCardComponent],
  templateUrl: './info-card-list.component.html',
  styleUrl: './info-card-list.component.css'
})
export class InfoCardListComponent {
  @Input() data!: any;
}
