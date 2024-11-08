import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfaiPageRoutingModule } from './pfai-routing.module';

import { PfaiPage } from './pfai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfaiPageRoutingModule
  ],
  declarations: [PfaiPage]
})
export class PfaiPageModule {}
