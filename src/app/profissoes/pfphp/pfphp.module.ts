import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfphpPageRoutingModule } from './pfphp-routing.module';

import { PfphpPage } from './pfphp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfphpPageRoutingModule
  ],
  declarations: [PfphpPage]
})
export class PfphpPageModule {}
