import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapFirebasePage } from './map-firebase.page';

const routes: Routes = [
  {
    path: '',
    component: MapFirebasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapFirebasePageRoutingModule {}
