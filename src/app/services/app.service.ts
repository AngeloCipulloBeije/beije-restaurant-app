import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  private BASE_URL = "https://private-anon-bbb36882f9-pizzaapp.apiary-mock.com"

  activeTabSubject$: BehaviorSubject<string> = new BehaviorSubject('Tillbehör');
  activeTab$: Observable<string> = this.activeTabSubject$.asObservable();

  setTabValue(tabValue: string) {
    this.activeTabSubject$.next(tabValue);
  }

  getTabValue() {
    return this.activeTab$;
  }

  getMenuItems(category: string) {
    return this.http.get(`${this.BASE_URL}/restaurants/restaurantId/menu?category=${category}`)
  }

}
