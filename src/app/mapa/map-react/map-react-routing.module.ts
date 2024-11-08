import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapReactPage } from './map-react.page';

const routes: Routes = [
  {
    path: '',
    component: MapReactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapReactPageRoutingModule {}
