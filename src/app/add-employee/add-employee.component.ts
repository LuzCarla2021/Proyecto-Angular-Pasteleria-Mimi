import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';  // Para redirigir a la página de empleados
import { EmployeeService } from '../employee.service';  // Servicio para manejar empleados

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  standalone: false
})

export class AddEmployeeComponent {
  // Modelo con los nuevos campos para el empleado
  newEmployee = { name: '', phone: '', dob: '', email: '' };

  constructor(@Inject(EmployeeService) private employeeService: EmployeeService, private router: Router) {}

  onSubmit(): void {
    // Llamar al servicio para agregar el empleado
    this.employeeService.addEmployee(this.newEmployee);

    // Redirigir a la página de empleados
    this.router.navigate(['/employees']);
  }
}
