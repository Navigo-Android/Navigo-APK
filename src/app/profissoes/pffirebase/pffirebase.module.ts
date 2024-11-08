import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PffirebasePageRoutingModule } from './pffirebase-routing.module';

import { PffirebasePage } from './pffirebase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PffirebasePageRoutingModule
  ],
  declarations: [PffirebasePage]
})
export class PffirebasePageModule {}
