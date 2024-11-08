import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapOraclePageRoutingModule } from './map-oracle-routing.module';

import { MapOraclePage } from './map-oracle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapOraclePageRoutingModule
  ],
  declarations: [MapOraclePage]
})
export class MapOraclePageModule {}
