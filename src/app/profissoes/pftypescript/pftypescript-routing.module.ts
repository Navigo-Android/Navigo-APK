import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PftypescriptPage } from './pftypescript.page';

const routes: Routes = [
  {
    path: '',
    component: PftypescriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PftypescriptPageRoutingModule {}
