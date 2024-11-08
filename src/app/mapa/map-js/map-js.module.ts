import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapJsPageRoutingModule } from './map-js-routing.module';

import { MapJsPage } from './map-js.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapJsPageRoutingModule
  ],
  declarations: [MapJsPage]
})
export class MapJsPageModule {}
