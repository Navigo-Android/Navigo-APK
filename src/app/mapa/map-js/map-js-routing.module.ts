import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapJsPage } from './map-js.page';

const routes: Routes = [
  {
    path: '',
    component: MapJsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapJsPageRoutingModule {}
