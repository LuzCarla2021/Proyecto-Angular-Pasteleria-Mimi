import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
logout() {
throw new Error('Method not implemented.');
}
   // Lista de los enlaces para el menú
   menuItems = [
    {name: 'Inicio', route:'/login'},
    {name:'Usuarios', route:'/home'},
    { name: 'Producto', route: '/producto' },
    { name: 'Empleados', route: '/empleados' },
    { name: 'Ventas', route: '/ventas' },
    { name: 'Pedidos', route: '/pedidos' }, 
    { name: 'Clientes', route: '/clientes' }
  ];

}
