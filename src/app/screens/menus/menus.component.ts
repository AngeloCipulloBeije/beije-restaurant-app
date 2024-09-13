import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { TabsMenuComponent } from '../../components/tabs-menu/tabs-menu.component';
import { AppService } from '../../services/app.service';
import { LayoutComponent } from '../../components/layout/layout.component';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [BreadcrumbComponent, TabsMenuComponent, LayoutComponent],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent {


}
