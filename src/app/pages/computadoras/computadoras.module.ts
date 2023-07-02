import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputadorasRoutingModule } from './computadoras-routing.module';
import { ComputadorasComponent } from './computadoras.component';
import { ComputadoraComponent } from './computadora/computadora.component';


@NgModule({
  declarations: [
    ComputadorasComponent,
    ComputadoraComponent
  ],
  imports: [
    CommonModule,
    ComputadorasRoutingModule
  ]
})
export class ComputadorasModule { }
