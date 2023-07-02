import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadesRoutingModule } from './ciudades-routing.module';
import { CiudadesComponent } from './ciudades.component';
import { CiudadComponent } from './ciudad/ciudad.component';


@NgModule({
  declarations: [
    CiudadesComponent,
    CiudadComponent
  ],
  imports: [
    CommonModule,
    CiudadesRoutingModule
  ]
})
export class CiudadesModule { }
