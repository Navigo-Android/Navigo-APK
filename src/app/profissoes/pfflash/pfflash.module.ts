import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfflashPageRoutingModule } from './pfflash-routing.module';

import { PfflashPage } from './pfflash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfflashPageRoutingModule
  ],
  declarations: [PfflashPage]
})
export class PfflashPageModule {}
