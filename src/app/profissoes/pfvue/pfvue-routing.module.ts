import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfvuePage } from './pfvue.page';

const routes: Routes = [
  {
    path: '',
    component: PfvuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfvuePageRoutingModule {}
