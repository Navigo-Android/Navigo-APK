import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfdjangoPageRoutingModule } from './pfdjango-routing.module';

import { PfdjangoPage } from './pfdjango.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfdjangoPageRoutingModule
  ],
  declarations: [PfdjangoPage]
})
export class PfdjangoPageModule {}
