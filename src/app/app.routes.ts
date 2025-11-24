import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; 
import { AppComponent } from './app.component'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 

export const routes: Routes = [
 { path: 'login', component: LoginComponent },
 { path: 'home', component: HomeComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: '', redirectTo: 'login', pathMatch: 'full' },
<<<<<<< HEAD
];
=======
];
>>>>>>> 2f6422cc61d3a9e7f7a2f7bc167438bb39003461
