import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapCssPage } from './map-css.page';

const routes: Routes = [
  {
    path: '',
    component: MapCssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapCssPageRoutingModule {}
