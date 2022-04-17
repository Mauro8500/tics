import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardCompradorRoutingModule } from './dashboardcom-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardCompradorComponent } from './dashboard-comprador.component';
import { NavbarcomComponent } from './navbarcom/navbarcom.component';
import { InicioComponent } from './inicio/inicio.component';
import { LogincompradorComponent } from './logincomprador/logincomprador.component';
import { EventoscomComponent } from './eventoscom/eventoscom.component';
import { MenuCompradorComponent } from './menu-comprador/menu-comprador.component';
import { CompraticketComponent } from './compraticket/compraticket.component';
/*import { EmpresaComponent } from './empresa/empresa.component';
import { FormCompradorComponent } from './form-comprador/form-comprador.component';
import { FormVendedorComponent } from './form-vendedor/form-vendedor.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { RegistrosComponent } from './registros/registros.component';

import { PagotarjetaComponent } from './pagotarjeta/pagotarjeta.component';

import { EventosCompradorComponent } from './eventos-comprador/eventos-comprador.component';
import { EventosVendedorComponent } from './eventos-vendedor/eventos-vendedor.component';*/



@NgModule({
  declarations: [
    DashboardCompradorComponent,
    NavbarcomComponent,
    InicioComponent,
    LogincompradorComponent,
    EventoscomComponent,
    MenuCompradorComponent,
    CompraticketComponent,
    /*EmpresaComponent,
    FormCompradorComponent,
    FormVendedorComponent,
    FormEventoComponent,
    FormEmpresaComponent,
    RegistrosComponent,
    
    PagotarjetaComponent,
    
    EventosCompradorComponent,
    EventosVendedorComponent,*/

  ],
  imports: [
    CommonModule,
    DashboardCompradorRoutingModule,
    SharedModule
  ]
})
export class DashboardCompradorModule { }
