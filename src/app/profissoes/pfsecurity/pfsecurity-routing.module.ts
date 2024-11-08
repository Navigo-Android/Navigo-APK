import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfsecurityPage } from './pfsecurity.page';

const routes: Routes = [
  {
    path: '',
    component: PfsecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfsecurityPageRoutingModule {}
