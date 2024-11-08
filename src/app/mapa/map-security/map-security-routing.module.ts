import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapSecurityPage } from './map-security.page';

const routes: Routes = [
  {
    path: '',
    component: MapSecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapSecurityPageRoutingModule {}
