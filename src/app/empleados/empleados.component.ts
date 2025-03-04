import { Component } from '@angular/core';

@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  // Lista de empleados con sus detalles
  employees = [
    { name: 'Juan Pérez', phone: '555-1234', birthdate: new Date('1990-01-15'), email: 'juan@correo.com' },
    { name: 'Ana López', phone: '555-5678', birthdate: new Date('1985-03-25'), email: 'ana@correo.com' },
    { name: 'Carlos Sánchez', phone: '555-8765', birthdate: new Date('1992-07-19'), email: 'carlos@correo.com' },
    { name: 'Lucía Gómez', phone: '555-4321', birthdate: new Date('1988-11-05'), email: 'lucia@correo.com' },
    { name: 'María Fernández', phone: '555-2468', birthdate: new Date('1995-05-20'), email: 'maria@correo.com' },
    { name: 'José Martínez', phone: '555-1357', birthdate: new Date('1980-12-22'), email: 'jose@correo.com' },
    { name: 'Patricia Torres', phone: '555-2469', birthdate: new Date('1993-04-13'), email: 'patricia@correo.com' },
    { name: 'David Rodríguez', phone: '555-3579', birthdate: new Date('1987-06-30'), email: 'david@correo.com' },
    { name: 'Laura Díaz', phone: '555-4680', birthdate: new Date('1990-09-09'), email: 'laura@correo.com' },
    { name: 'Ricardo Pérez', phone: '555-5791', birthdate: new Date('1986-02-18'), email: 'ricardo@correo.com' },
    { name: 'Marta Ramírez', phone: '555-6802', birthdate: new Date('1991-11-25'), email: 'marta@correo.com' },
    { name: 'Miguel Gómez', phone: '555-7913', birthdate: new Date('1989-07-08'), email: 'miguel@correo.com' },
    { name: 'Elena Sánchez', phone: '555-8924', birthdate: new Date('1994-03-17'), email: 'elena@correo.com' },
    { name: 'Antonio Fernández', phone: '555-9035', birthdate: new Date('1982-01-04'), email: 'antonio@correo.com' },
    { name: 'Raquel López', phone: '555-0146', birthdate: new Date('1993-05-29'), email: 'raquel@correo.com' }
  ];
  

  // Método para eliminar un empleado
  deleteEmployee(index: number) {
    this.employees.splice(index, 1);  // Elimina el empleado en la posición dada
  }
}
