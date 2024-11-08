import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfcssPageRoutingModule } from './pfcss-routing.module';

import { PfcssPage } from './pfcss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfcssPageRoutingModule
  ],
  declarations: [PfcssPage]
})
export class PfcssPageModule {}
