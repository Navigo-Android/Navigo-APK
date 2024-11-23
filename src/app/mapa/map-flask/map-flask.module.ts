import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapFlaskPageRoutingModule } from './map-flask-routing.module';

import { MapFlaskPage } from './map-flask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapFlaskPageRoutingModule
  ],
  declarations: [MapFlaskPage]
})
export class MapFlaskPageModule {}
