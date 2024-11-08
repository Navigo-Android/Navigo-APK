import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavaScriptPage } from './javascript.page';

const routes: Routes = [
  {
    path: '',
    component: JavaScriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavaScriptPageRoutingModule {}
