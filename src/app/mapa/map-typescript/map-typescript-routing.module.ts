import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapTypescriptPage } from './map-typescript.page';

const routes: Routes = [
  {
    path: '',
    component: MapTypescriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapTypescriptPageRoutingModule {}
