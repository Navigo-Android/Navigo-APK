import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfcPageRoutingModule } from './pfc-routing.module';

import { PfcPage } from './pfc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfcPageRoutingModule
  ],
  declarations: [PfcPage]
})
export class PfcPageModule {}
