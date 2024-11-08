import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfsecurityPageRoutingModule } from './pfsecurity-routing.module';

import { PfsecurityPage } from './pfsecurity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfsecurityPageRoutingModule
  ],
  declarations: [PfsecurityPage]
})
export class PfsecurityPageModule {}
