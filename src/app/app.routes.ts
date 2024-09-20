import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './screens/about/about.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import { ServicesComponent } from './screens/services/services.component';
import { MenusComponent } from './screens/menus/menus.component';
import { ContactComponent } from './screens/contact/contact.component';
import { AdminComponent } from './screens/admin/admin.component';



export const routes: Routes = [
    { path: '', redirectTo: '/home', title:'Home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title:'Home', data: { name:"Home" } },
    { path: 'about', component: AboutComponent,  title: 'About', data: { name:"About" } },
    { path: 'service', component: ServicesComponent, title:'Service', data: { name:"Service" } },
    { path: 'menu', component: MenusComponent, title:'Menu', data: { name:"Menu" } },
    { path: 'contact', component: ContactComponent,  title:'Contact', data: { name:"Contact us" } },
    { path: 'admin', component: AdminComponent,  title:'Admin', data: { name:"Admin" } },
    { path: '**', component: NotFoundComponent }
  ];
