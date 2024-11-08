import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfjavascriptPageRoutingModule } from './pfjavascript-routing.module';

import { PfjavascriptPage } from './pfjavascript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfjavascriptPageRoutingModule
  ],
  declarations: [PfjavascriptPage]
})
export class PfjavascriptPageModule {}
