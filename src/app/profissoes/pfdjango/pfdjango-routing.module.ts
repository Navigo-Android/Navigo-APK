import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfdjangoPage } from './pfdjango.page';

const routes: Routes = [
  {
    path: '',
    component: PfdjangoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfdjangoPageRoutingModule {}
