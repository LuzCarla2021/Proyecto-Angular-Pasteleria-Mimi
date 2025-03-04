  import { Component } from '@angular/core';
  import { UserService } from '../user.service';  // Importamos el servicio
  import { Router } from '@angular/router';  // Para redirigir a la página de usuarios

  @Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css'],
    standalone: false
  })
  export class AddUserComponent {
    newUser = { name: '', email: '', phone: '', age: 0, role: '', gender: '' };  // Definimos los campos directamente

    constructor(private userService: UserService, private router: Router) {}

    onSubmit(): void {
      // Agregar el nuevo usuario
      this.userService.addUser(this.newUser);

      // Redirigir a la página de usuarios
      this.router.navigate(['/users']);
    }
  }
