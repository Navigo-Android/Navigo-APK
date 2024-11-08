import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfaiPage } from './pfai.page';

const routes: Routes = [
  {
    path: '',
    component: PfaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfaiPageRoutingModule {}
