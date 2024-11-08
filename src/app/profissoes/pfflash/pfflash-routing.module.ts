import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfflashPage } from './pfflash.page';

const routes: Routes = [
  {
    path: '',
    component: PfflashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfflashPageRoutingModule {}
