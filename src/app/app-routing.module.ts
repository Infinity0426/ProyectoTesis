import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'ciudades', loadChildren: () => import('./pages/ciudades/ciudades.module').then(m => m.CiudadesModule) }, { path: 'sucursales', loadChildren: () => import('./pages/sucursales/sucursales.module').then(m => m.SucursalesModule) }, { path: 'personas', loadChildren: () => import('./pages/personas/personas.module').then(m => m.PersonasModule) }, { path: 'accesorios', loadChildren: () => import('./pages/accesorios/accesorios.module').then(m => m.AccesoriosModule) }, { path: 'softwares', loadChildren: () => import('./pages/softwares/softwares.module').then(m => m.SoftwaresModule) }, { path: 'computadoras', loadChildren: () => import('./pages/computadoras/computadoras.module').then(m => m.ComputadorasModule) }, { path: 'documentos', loadChildren: () => import('./pages/documentos/documentos.module').then(m => m.DocumentosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
