import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapIonicPage } from './map-ionic.page';

const routes: Routes = [
  {
    path: '',
    component: MapIonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapIonicPageRoutingModule {}
