import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapAIPage } from './map-ai.page';

const routes: Routes = [
  {
    path: '',
    component: MapAIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapAIPageRoutingModule {}
