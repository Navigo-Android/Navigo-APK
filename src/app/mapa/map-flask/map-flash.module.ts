import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapFlashPageRoutingModule } from './map-flash-routing.module';

import { MapFlashPage } from './map-flash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapFlashPageRoutingModule
  ],
  declarations: [MapFlashPage]
})
export class MapFlashPageModule {}
