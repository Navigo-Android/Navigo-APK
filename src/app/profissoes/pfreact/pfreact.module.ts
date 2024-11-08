import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfreactPageRoutingModule } from './pfreact-routing.module';

import { PfreactPage } from './pfreact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfreactPageRoutingModule
  ],
  declarations: [PfreactPage]
})
export class PfreactPageModule {}
