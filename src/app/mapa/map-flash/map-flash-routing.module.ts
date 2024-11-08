import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapFlashPage } from './map-flash.page';

const routes: Routes = [
  {
    path: '',
    component: MapFlashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapFlashPageRoutingModule {}
