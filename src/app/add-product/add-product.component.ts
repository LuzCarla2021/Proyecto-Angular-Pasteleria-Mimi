import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  standalone: false
})
export class AddProductComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  product = {
    name: '',
    description: '',
    price: null,
    imageUrl: '' // Cambiamos para almacenar la URL de la imagen
  };
newProduct: any;

  constructor(private router: Router) { }

  // Método para manejar la adición de un producto
  addProduct() {
    console.log('Producto agregado:', this.product);
    // Aquí puedes agregar el producto a la lista de productos o hacer una llamada a un API
    // Luego redirigir a la página de productos o cualquier otra página
    this.router.navigate(['/products']);
  }
}
