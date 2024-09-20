import { NgClass } from '@angular/common';
import { JoinArrayPipe } from '../../pipes/join-array.pipe';
import { SpinnerComponent } from '../spinner/spinner.component';
import { AppService } from '../../services/app.service';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBreadSlice, faCoffee, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabs-menu',
  standalone: true,
  imports: [FontAwesomeModule, NgClass, JoinArrayPipe, SpinnerComponent],
  templateUrl: './tabs-menu.component.html',
  styleUrl: './tabs-menu.component.css'
})
export class TabsMenuComponent {
  constructor(private appService: AppService) {

  }

  BASE_URL = "https://private-anon-bbb36882f9-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu"
  menuItems: any = [];
  activeTab: string = '';
  loading: boolean = false;

  tabs = [
    { value: 'Tillbehör', label: 'Bread and Butter', icon:faBreadSlice },
    { value: 'Pizza', label: 'Pizza', icon: faPizzaSlice },
    { value: 'Dryck', label: 'Drink', icon: faCoffee },
  ]

  ngOnInit(): void {
    this.appService.getTabValue().subscribe((value: string) => {
      this.activeTab = value;
    });
    this.fetchData(this.activeTab);
  }

  setActiveTab(tabValue: string): void {
    if (this.activeTab !== tabValue) {
      this.appService.setTabValue(tabValue)
      this.fetchData(tabValue);
    }
  }

  fetchData(category: string): void {
    this.loading = true;
    this.appService.getMenuItems(category).subscribe((data: any) => {
      this.menuItems = data?.filter((item:any) => item.category === category);
      this.loading = false;
    });
  }

}
