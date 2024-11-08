import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapJavaPageRoutingModule } from './map-java-routing.module';

import { MapJavaPage } from './map-java.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapJavaPageRoutingModule
  ],
  declarations: [MapJavaPage]
})
export class MapJavaPageModule {}
