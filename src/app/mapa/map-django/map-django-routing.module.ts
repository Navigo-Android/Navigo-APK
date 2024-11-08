import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapDjangoPage } from './map-django.page';

const routes: Routes = [
  {
    path: '',
    component: MapDjangoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapDjangoPageRoutingModule {}
