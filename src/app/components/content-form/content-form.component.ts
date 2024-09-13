import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-content-form',
  standalone: true,
  imports: [FaIconComponent, ButtonComponent],
  templateUrl: './content-form.component.html',
  styleUrl: './content-form.component.css'
})
export class ContentFormComponent {
  playIcon = faPlay
}
