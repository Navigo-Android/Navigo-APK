import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPhpPageRoutingModule } from './map-php-routing.module';

import { MapPhpPage } from './map-php.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPhpPageRoutingModule
  ],
  declarations: [MapPhpPage]
})
export class MapPhpPageModule {}
