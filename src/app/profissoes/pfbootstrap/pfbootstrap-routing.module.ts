import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfbootstrapPage } from './pfbootstrap.page';

const routes: Routes = [
  {
    path: '',
    component: PfbootstrapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfbootstrapPageRoutingModule {}
