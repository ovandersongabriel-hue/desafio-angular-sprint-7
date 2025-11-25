import { Component, OnInit } from '@angular/core'; 
import { Router, RouterOutlet, RouterLink, NavigationEnd } from '@angular/router'; 
import { CommonModule } from '@angular/common'; // 
import { filter } from 'rxjs/operators'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 

  title = 'Sprint7OG';

 
}