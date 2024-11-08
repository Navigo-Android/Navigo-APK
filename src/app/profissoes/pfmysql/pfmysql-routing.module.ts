import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfmysqlPage } from './pfmysql.page';

const routes: Routes = [
  {
    path: '',
    component: PfmysqlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfmysqlPageRoutingModule {}
