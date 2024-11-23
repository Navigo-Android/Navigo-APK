import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfflaskPageRoutingModule } from './pfflask-routing.module';

import { PfflaskPage } from './pfflask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfflaskPageRoutingModule
  ],
  declarations: [PfflaskPage]
})
export class PfflaskPageModule {}
