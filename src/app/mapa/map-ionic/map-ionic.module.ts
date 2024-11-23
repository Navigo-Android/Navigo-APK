import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapIonicPageRoutingModule } from './map-ionic-routing.module';

import { MapIonicPage } from './map-ionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapIonicPageRoutingModule
  ],
  declarations: [MapIonicPage]
})
export class MapIonicPageModule {}
