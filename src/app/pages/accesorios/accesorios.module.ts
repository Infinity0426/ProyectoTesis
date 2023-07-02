import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoriosRoutingModule } from './accesorios-routing.module';
import { AccesoriosComponent } from './accesorios.component';
import { AccesorioComponent } from './accesorio/accesorio.component';


@NgModule({
  declarations: [
    AccesoriosComponent,
    AccesorioComponent
  ],
  imports: [
    CommonModule,
    AccesoriosRoutingModule
  ]
})
export class AccesoriosModule { }
