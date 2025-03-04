import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: false,
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
addProduct() {
throw new Error('Method not implemented.');
}
   // Lista de productos con precios
   products = [
    { image: 'https://liznaturalbakery.com/wp-content/uploads/2020/05/cake-cuatro-leches-mexicano-2.jpg', name: 'Pastel de Fresas con Crema', description: 'Este delicioso pastel consta de una base esponjosa de bizcocho suave y aireado, cubierto con una capa generosa de crema batida fresca y trozos jugosos de fresas maduras.', price: 199.99 },
    { image: 'https://www.radiohouse.hn/wp-content/uploads/2019/03/cocina-delirante-1320x879.jpg', name: 'Pastel de chocolate', description: 'DEste pastel está hecho con un rico bizcocho de chocolate, húmedo y esponjoso, que se derrite en la boca. Se cubre con una suave y cremosa capa de ganache de chocolate, que aporta un toque extra de decadencia y profundidad al sabor. ', price: 299.99 },
    { image: 'https://th.bing.com/th/id/R.482b002dc8d8e8399b8978055472cc29?rik=jCZRZEZg1DqGuw&pid=ImgRaw&r=0', name: 'Pastel de vainilla', description: 'Este pastel se caracteriza por su suave y esponjoso bizcocho de vainilla, con un sabor delicado pero reconfortante. Se suele acompañar con una capa de crema de mantequilla o glaseado de vainilla, que complementa perfectamente la suavidad del pastel.', price: 150.50 },
    { image: 'https://www.larutadelagarnacha.mx/wp-content/uploads/2021/06/pastel-portada.jpeg', name: 'Pastel de 3 leches', description: 'Este pastel es un delicioso y húmedo bizcocho que se impregna con una mezcla de tres tipos de leche: leche evaporada, leche condensada y crema de leche. Después de absorber la mezcla, el pastel se vuelve increíblemente suave y jugoso. ', price: 220.75 },
    { image: 'https://th.bing.com/th/id/R.c5c100219c5aa74b1a1a38be42b22afe?rik=FEnicv8pLRiuOQ&pid=ImgRaw&r=0', name: 'Bizcocho', description: 'El biscocho es un pastel ligero y esponjoso, generalmente hecho con una mezcla básica de harina, azúcar, huevos y mantequilla, batidos hasta obtener una textura aireada. Este tipo de pastel tiene una miga suave y delicada, que se puede disfrutar sola o acompañada de crema, frutas o mermelada.', price: 120.99 },
    { image: 'https://th.bing.com/th/id/OIP._CCk5Z8roEBThQamUbT5iQAAAA?rs=1&pid=ImgDetMain', name: 'Pastel de queso con zarzamora', description: 'Este delicioso pastel combina la suavidad y cremosidad de un cheesecake clásico con el toque ácido y dulce de las zarzamoras frescas. La base está hecha de una galleta crujiente, generalmente de galletas Digestive o galletas de chocolate, que contrasta perfectamente con la textura cremosa del relleno de queso, hecho con queso crema, azúcar, huevos y un toque de vainilla.', price: 340.49 }
  ];

  // Método para eliminar un producto
  deleteProduct(index: number) {
    this.products.splice(index, 1);  // Elimina el producto en la posición dada
  }
}
