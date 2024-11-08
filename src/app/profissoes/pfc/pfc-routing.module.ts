import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfcPage } from './pfc.page';

const routes: Routes = [
  {
    path: '',
    component: PfcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfcPageRoutingModule {}
