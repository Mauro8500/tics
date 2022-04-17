import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCompradorComponent } from './dashboard-comprador.component';
import { InicioComponent } from './inicio/inicio.component';
import { LogincompradorComponent } from './logincomprador/logincomprador.component'
import { EventoscomComponent } from './eventoscom/eventoscom.component';
import { MenuCompradorComponent } from './menu-comprador/menu-comprador.component';
import { CompraticketComponent } from './compraticket/compraticket.component';
/*import { EmpresaComponent } from './empresa/empresa.component';
import { RegistrosComponent } from './registros/registros.component';
import { FormVendedorComponent } from './form-vendedor/form-vendedor.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { FormCompradorComponent } from './form-comprador/form-comprador.component';

*/


const routes: Routes = [
  { path: '', component: DashboardCompradorComponent, children: [
    { path: 'logincomprador', component: LogincompradorComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'eventoscom', component: EventoscomComponent },
    { path: 'menu-comprador', component: MenuCompradorComponent},
    { path: 'compraticket', component: CompraticketComponent},
    /*{ path: 'empresa', component: EmpresaComponent },
    { path: 'registros', component: RegistrosComponent },
    { path: 'form-vendedor', component: FormVendedorComponent },
    { path: 'form-comprador', component: FormCompradorComponent },
    { path: 'form-empresa', component: FormEmpresaComponent },
    { path: 'form-evento', component: FormEventoComponent },
    
    */
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardCompradorRoutingModule { }
