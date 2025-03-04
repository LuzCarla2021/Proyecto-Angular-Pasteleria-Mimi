import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: any[] = [];

  constructor() {}

  addEmployee(employee: any): void {
    this.employees.push(employee); // Agrega el nuevo empleado al array
    console.log(this.employees);  // Puedes eliminar esta línea más tarde
  }

  getEmployees(): any[] {
    return this.employees;  // Devuelve la lista de empleados
  }
}
