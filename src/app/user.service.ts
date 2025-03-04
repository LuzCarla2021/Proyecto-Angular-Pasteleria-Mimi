import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [];  // Usamos cualquier tipo para el usuario directamente

  constructor() { }

  // Obtener la lista de usuarios
  getUsers() {
    return this.users;
  }

  // Agregar un nuevo usuario
  addUser(user: any) {
    this.users.push(user);
  }

  // Eliminar un usuario
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
