import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapTypescriptPageRoutingModule } from './map-typescript-routing.module';

import { MapTypescriptPage } from './map-typescript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapTypescriptPageRoutingModule
  ],
  declarations: [MapTypescriptPage]
})
export class MapTypescriptPageModule {}
