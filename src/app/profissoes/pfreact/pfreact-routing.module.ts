import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfreactPage } from './pfreact.page';

const routes: Routes = [
  {
    path: '',
    component: PfreactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfreactPageRoutingModule {}
