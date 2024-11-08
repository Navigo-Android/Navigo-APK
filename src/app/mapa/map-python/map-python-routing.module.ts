import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPythonPage } from './map-python.page';

const routes: Routes = [
  {
    path: '',
    component: MapPythonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapPythonPageRoutingModule {}
