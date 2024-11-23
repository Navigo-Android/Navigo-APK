import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfionicPageRoutingModule } from './pfionic-routing.module';

import { PfionicPage } from './pfionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfionicPageRoutingModule
  ],
  declarations: [PfionicPage]
})
export class PfionicPageModule {}
