import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwaresRoutingModule } from './softwares-routing.module';
import { SoftwaresComponent } from './softwares.component';
import { SoftwareComponent } from './software/software.component';


@NgModule({
  declarations: [
    SoftwaresComponent,
    SoftwareComponent
  ],
  imports: [
    CommonModule,
    SoftwaresRoutingModule
  ]
})
export class SoftwaresModule { }
