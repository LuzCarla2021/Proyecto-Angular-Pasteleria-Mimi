import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username.trim() && this.password.trim()) {
      // Guarda en localStorage solo como caché falso
      localStorage.setItem('user', this.username);
      localStorage.setItem('password', this.password);

      this.router.navigate(['/home']);
    }
  }
}
