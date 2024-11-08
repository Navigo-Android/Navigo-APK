import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPythonPageRoutingModule } from './map-python-routing.module';

import { MapPythonPage } from './map-python.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPythonPageRoutingModule
  ],
  declarations: [MapPythonPage]
})
export class MapPythonPageModule {}
