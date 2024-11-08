import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfphpPage } from './pfphp.page';

const routes: Routes = [
  {
    path: '',
    component: PfphpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfphpPageRoutingModule {}
