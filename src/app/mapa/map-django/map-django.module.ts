import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapDjangoPageRoutingModule } from './map-django-routing.module';

import { MapDjangoPage } from './map-django.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapDjangoPageRoutingModule
  ],
  declarations: [MapDjangoPage]
})
export class MapDjangoPageModule {}
