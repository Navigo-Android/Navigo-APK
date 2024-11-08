import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapFirebasePageRoutingModule } from './map-firebase-routing.module';

import { MapFirebasePage } from './map-firebase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapFirebasePageRoutingModule
  ],
  declarations: [MapFirebasePage]
})
export class MapFirebasePageModule {}
