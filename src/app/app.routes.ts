import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './screens/about/about.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';



export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'service', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
  ];
