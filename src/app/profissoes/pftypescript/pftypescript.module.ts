import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PftypescriptPageRoutingModule } from './pftypescript-routing.module';

import { PftypescriptPage } from './pftypescript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PftypescriptPageRoutingModule
  ],
  declarations: [PftypescriptPage]
})
export class PftypescriptPageModule {}
