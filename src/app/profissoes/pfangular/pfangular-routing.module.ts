import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfangularPage } from './pfangular.page';

const routes: Routes = [
  {
    path: '',
    component: PfangularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfangularPageRoutingModule {}
