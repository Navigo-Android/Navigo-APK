import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapCPage } from './map-c.page';

const routes: Routes = [
  {
    path: '',
    component: MapCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapCPageRoutingModule {}
