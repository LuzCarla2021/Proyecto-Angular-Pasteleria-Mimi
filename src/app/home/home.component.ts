import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:false
})
export class HomeComponent {
addUser() {
throw new Error('Method not implemented.');
}
  username = localStorage.getItem('user');
  
  // Lista de usuarios
  users = [
    { name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '555-1234', age: 30, role: 'Administrador', gender: 'Masculino' },
    { name: 'Ana Gómez', email: 'ana.gomez@example.com', phone: '555-5678', age: 25, role: 'Empleado', gender: 'Femenino' },
    { name: 'Carlos López', email: 'carlos.lopez@example.com', phone: '555-8765', age: 28, role: 'Vendedor', gender: 'Masculino' },
    { name: 'Laura Rodríguez', email: 'laura.rodriguez@example.com', phone: '555-1122', age: 34, role: 'Empleado', gender: 'Femenino' },
    { name: 'Miguel Fernández', email: 'miguel.fernandez@example.com', phone: '555-3344', age: 29, role: 'Administrador', gender: 'Masculino' },
    { name: 'Claudia Martínez', email: 'claudia.martinez@example.com', phone: '555-5566', age: 22, role: 'Cliente', gender: 'Femenino' },
    { name: 'David Pérez', email: 'david.perez@example.com', phone: '555-7788', age: 40, role: 'Empleado', gender: 'Masculino' },
    { name: 'Sofia Hernández', email: 'sofia.hernandez@example.com', phone: '555-9900', age: 26, role: 'Vendedora', gender: 'Femenino' },
    { name: 'Raúl Jiménez', email: 'raul.jimenez@example.com', phone: '555-2233', age: 31, role: 'Vendedor', gender: 'Masculino' },
    { name: 'Verónica Ruiz', email: 'veronica.ruiz@example.com', phone: '555-4455', age: 38, role: 'Cliente', gender: 'Femenino' },
    { name: 'Fernando Díaz', email: 'fernando.diaz@example.com', phone: '555-6677', age: 45, role: 'Administrador', gender: 'Masculino' },
    { name: 'María Pérez', email: 'maria.perez@example.com', phone: '555-8899', age: 33, role: 'Empleado', gender: 'Femenino' },
    { name: 'Ricardo Sánchez', email: 'ricardo.sanchez@example.com', phone: '555-1100', age: 27, role: 'Cliente', gender: 'Masculino' },
    { name: 'Patricia García', email: 'patricia.garcia@example.com', phone: '555-3345', age: 24, role: 'Vendedora', gender: 'Femenino' },
    { name: 'Antonio Ramírez', email: 'antonio.ramirez@example.com', phone: '555-5567', age: 35, role: 'Vendedor', gender: 'Masculino' },
    { name: 'Elena Torres', email: 'elena.torres@example.com', phone: '555-7789', age: 32, role: 'Cliente', gender: 'Femenino' }
  ];

  constructor(private router: Router) {}

  
  // Función para eliminar usuario
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    this.router.navigate(['/login']);
  }
}
