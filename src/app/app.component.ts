import { Component, OnInit } from '@angular/core'; 
import { Router, RouterOutlet, RouterLink, NavigationEnd } from '@angular/router'; 
import { CommonModule } from '@angular/common'; // 
import { filter } from 'rxjs/operators'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent implements OnInit { 

  showLayout = false;

  constructor(private router: Router) {} 

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      
      this.showLayout = event.url !== '/login';
    });
  }

  sair() {
    console.log("Usuário deslogado. Redirecionando para login.");
    this.router.navigate(['/login']); 
  }
}