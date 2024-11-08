import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapMysqlPage } from './map-mysql.page';

const routes: Routes = [
  {
    path: '',
    component: MapMysqlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapMysqlPageRoutingModule {}
