import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfjavaPage } from './pfjava.page';

const routes: Routes = [
  {
    path: '',
    component: PfjavaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfjavaPageRoutingModule {}
