import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapVuePageRoutingModule } from './map-vue-routing.module';

import { MapVuePage } from './map-vue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapVuePageRoutingModule
  ],
  declarations: [MapVuePage]
})
export class MapVuePageModule {}
