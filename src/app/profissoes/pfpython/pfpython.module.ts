import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfpythonPageRoutingModule } from './pfpython-routing.module';

import { PfpythonPage } from './pfpython.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfpythonPageRoutingModule
  ],
  declarations: [PfpythonPage]
})
export class PfpythonPageModule {}
