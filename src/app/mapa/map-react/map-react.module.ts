import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapReactPageRoutingModule } from './map-react-routing.module';

import { MapReactPage } from './map-react.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapReactPageRoutingModule
  ],
  declarations: [MapReactPage]
})
export class MapReactPageModule {}
