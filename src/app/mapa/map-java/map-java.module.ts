import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapJavaPageRoutingModule } from './map-java-routing.module';

import { MapJavaPage } from './map-java.page';

@NgModule({
  declarations: [MapJavaPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapJavaPageRoutingModule,
  ],
})
export class MapJavaPageModule {}