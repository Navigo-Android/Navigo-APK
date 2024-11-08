import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapJavaPage } from './map-java.page';

const routes: Routes = [
  {
    path: '',
    component: MapJavaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapJavaPageRoutingModule {}
