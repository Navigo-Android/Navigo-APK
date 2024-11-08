import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapCPageRoutingModule } from './map-c-routing.module';

import { MapCPage } from './map-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapCPageRoutingModule
  ],
  declarations: [MapCPage]
})
export class MapCPageModule {}
