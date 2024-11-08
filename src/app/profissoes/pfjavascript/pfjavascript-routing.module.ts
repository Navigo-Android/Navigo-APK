import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfjavascriptPage } from './pfjavascript.page';

const routes: Routes = [
  {
    path: '',
    component: PfjavascriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfjavascriptPageRoutingModule {}
