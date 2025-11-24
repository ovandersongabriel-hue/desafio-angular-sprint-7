import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  menuAberto: boolean = false;

  constructor(private router: Router) {}

  
  alternarMenu() {
    this.menuAberto = !this.menuAberto;
  }

  
  sair() {
    this.router.navigate(['/login']);
  }

}