import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VuePage } from './vue.page';

const routes: Routes = [
  {
    path: '',
    component: VuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VuePageRoutingModule {}
