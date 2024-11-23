import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfflaskPage } from './pfflask.page';

const routes: Routes = [
  {
    path: '',
    component: PfflaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfflaskPageRoutingModule {}
