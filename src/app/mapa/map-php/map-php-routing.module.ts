import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPhpPage } from './map-php.page';

const routes: Routes = [
  {
    path: '',
    component: MapPhpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapPhpPageRoutingModule {}
