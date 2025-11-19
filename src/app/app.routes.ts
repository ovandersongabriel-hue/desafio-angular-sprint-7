import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; 
import { AppComponent } from './app.component'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 

export const routes: Routes = [
 { path: 'login', component: LoginComponent },


 { 
 path: '', 
 component: AppComponent, 
 children: [
 { path: '', redirectTo: 'home', pathMatch: 'full' }, 
 { path: 'home', component: HomeComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'produtos', redirectTo: 'dashboard', pathMatch: 'full' }, 
 ]
 },

 { path: '**', redirectTo: 'login' },
];