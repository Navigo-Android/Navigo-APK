import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapFlaskPage } from './map-flask.page';

const routes: Routes = [
  {
    path: '',
    component: MapFlaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapFlaskPageRoutingModule {}
