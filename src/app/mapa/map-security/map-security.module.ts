import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapSecurityPageRoutingModule } from './map-security-routing.module';

import { MapSecurityPage } from './map-security.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapSecurityPageRoutingModule
  ],
  declarations: [MapSecurityPage]
})
export class MapSecurityPageModule {}
