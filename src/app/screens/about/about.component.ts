import { Component } from '@angular/core';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { StaffCardListComponent } from '../../components/staff-card-list/staff-card-list.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [WelcomeComponent, BreadcrumbComponent, LayoutComponent, StaffCardListComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
