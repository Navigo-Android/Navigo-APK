import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PforaclePage } from './pforacle.page';

const routes: Routes = [
  {
    path: '',
    component: PforaclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PforaclePageRoutingModule {}
