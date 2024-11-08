import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PforaclePageRoutingModule } from './pforacle-routing.module';

import { PforaclePage } from './pforacle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PforaclePageRoutingModule
  ],
  declarations: [PforaclePage]
})
export class PforaclePageModule {}
