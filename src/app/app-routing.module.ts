import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { VentasComponent } from './ventas/ventas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'add-user', component: AddUserComponent },
  {path:'add-product',component:AddProductComponent},
  {path:'add-employee',component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
