import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: string = '';
  senha: string = '';


  constructor(private router: Router) {}

  entrar() {
    console.log('Valor do Usuário:', this.usuario);
    console.log('É admin?', this.usuario.trim() === 'admin');
    
    console.log('Valor da Senha:', this.senha);
    console.log('É 123456?', this.senha.trim() === '123456');

    if (this.usuario.trim() === 'admin' && this.senha.trim() === '123456') {
      this.router.navigate(['/home']);
    } else {
      alert('Usuário ou senha incorretos!');
    }
  }
}
