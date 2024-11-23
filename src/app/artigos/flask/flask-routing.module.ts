import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlaskPage } from './flask.page';

const routes: Routes = [
  {
    path: '',
    component: FlaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlaskPageRoutingModule {}
