import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { SucursalesComponent } from './sucursales.component';
import { SucursalComponent } from './sucursal/sucursal.component';


@NgModule({
  declarations: [
    SucursalesComponent,
    SucursalComponent
  ],
  imports: [
    CommonModule,
    SucursalesRoutingModule
  ]
})
export class SucursalesModule { }
