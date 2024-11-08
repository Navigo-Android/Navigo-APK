import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfvuePageRoutingModule } from './pfvue-routing.module';

import { PfvuePage } from './pfvue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfvuePageRoutingModule
  ],
  declarations: [PfvuePage]
})
export class PfvuePageModule {}
