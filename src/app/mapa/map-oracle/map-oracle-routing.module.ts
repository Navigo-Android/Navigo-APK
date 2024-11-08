import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapOraclePage } from './map-oracle.page';

const routes: Routes = [
  {
    path: '',
    component: MapOraclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapOraclePageRoutingModule {}
