import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VuePageRoutingModule } from './vue-routing.module';

import { VuePage } from './vue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VuePageRoutingModule
  ],
  declarations: [VuePage]
})
export class VuePageModule {}
