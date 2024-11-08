import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfangularPageRoutingModule } from './pfangular-routing.module';

import { PfangularPage } from './pfangular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfangularPageRoutingModule
  ],
  declarations: [PfangularPage]
})
export class PfangularPageModule {}
