import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapCssPageRoutingModule } from './map-css-routing.module';

import { MapCssPage } from './map-css.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapCssPageRoutingModule
  ],
  declarations: [MapCssPage]
})
export class MapCssPageModule {}
