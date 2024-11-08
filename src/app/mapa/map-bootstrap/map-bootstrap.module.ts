import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapBootstrapPageRoutingModule } from './map-bootstrap-routing.module';

import { MapBootstrapPage } from './map-bootstrap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapBootstrapPageRoutingModule
  ],
  declarations: [MapBootstrapPage]
})
export class MapBootstrapPageModule {}
