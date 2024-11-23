import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfionicPage } from './pfionic.page';

const routes: Routes = [
  {
    path: '',
    component: PfionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfionicPageRoutingModule {}
