import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapAIPageRoutingModule } from './map-ai-routing.module';

import { MapAIPage } from './map-ai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapAIPageRoutingModule
  ],
  declarations: [MapAIPage]
})
export class MapAIPageModule {}
