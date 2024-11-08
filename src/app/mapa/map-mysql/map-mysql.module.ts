import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapMysqlPageRoutingModule } from './map-mysql-routing.module';

import { MapMysqlPage } from './map-mysql.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapMysqlPageRoutingModule
  ],
  declarations: [MapMysqlPage]
})
export class MapMysqlPageModule {}
