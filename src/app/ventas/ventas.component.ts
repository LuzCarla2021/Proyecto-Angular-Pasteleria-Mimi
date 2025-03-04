import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  standalone: false,
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  sales = [
    { date: '10/02/2025', folio: '#12345', orderNumber: '98765', total: 200.00 },
    { date: '09/02/2025', folio: '#12346', orderNumber: '98766', total: 350.00 },
    { date: '08/02/2025', folio: '#12347', orderNumber: '98767', total: 420.00 },
    { date: '07/02/2025', folio: '#12348', orderNumber: '98768', total: 550.00 },
    { date: '06/02/2025', folio: '#12349', orderNumber: '98769', total: 280.00 },
    { date: '05/02/2025', folio: '#12350', orderNumber: '98770', total: 190.00 },
    { date: '04/02/2025', folio: '#12351', orderNumber: '98771', total: 600.00 },
    { date: '03/02/2025', folio: '#12352', orderNumber: '98772', total: 320.00 },
    { date: '02/02/2025', folio: '#12353', orderNumber: '98773', total: 150.00 },
    { date: '01/02/2025', folio: '#12354', orderNumber: '98774', total: 480.00 },
    { date: '31/01/2025', folio: '#12355', orderNumber: '98775', total: 275.00 },
    { date: '30/01/2025', folio: '#12356', orderNumber: '98776', total: 720.00 },
    { date: '29/01/2025', folio: '#12357', orderNumber: '98777', total: 600.00 },
    { date: '28/01/2025', folio: '#12358', orderNumber: '98778', total: 350.00 },
    { date: '27/01/2025', folio: '#12359', orderNumber: '98779', total: 490.00 },
    { date: '26/01/2025', folio: '#12360', orderNumber: '98780', total: 410.00 },
    { date: '25/01/2025', folio: '#12361', orderNumber: '98781', total: 230.00 },
    { date: '24/01/2025', folio: '#12362', orderNumber: '98782', total: 300.00 },
    { date: '23/01/2025', folio: '#12363', orderNumber: '98783', total: 175.00 },
    { date: '22/01/2025', folio: '#12364', orderNumber: '98784', total: 250.00 }
  ];

  constructor(private router: Router) {}

  // Función para eliminar venta
  deleteSale(index: number) {
    this.sales.splice(index, 1);
  }
}
