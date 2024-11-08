import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfpythonPage } from './pfpython.page';

const routes: Routes = [
  {
    path: '',
    component: PfpythonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfpythonPageRoutingModule {}
