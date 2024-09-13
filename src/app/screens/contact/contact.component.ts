import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faMailReply } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LayoutComponent, BreadcrumbComponent, ButtonComponent, FaIconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  mailIcon = faEnvelope
}
