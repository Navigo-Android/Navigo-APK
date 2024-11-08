import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapVuePage } from './map-vue.page';

const routes: Routes = [
  {
    path: '',
    component: MapVuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapVuePageRoutingModule {}
