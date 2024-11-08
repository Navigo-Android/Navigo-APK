import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfjavaPageRoutingModule } from './pfjava-routing.module';

import { PfjavaPage } from './pfjava.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfjavaPageRoutingModule
  ],
  declarations: [PfjavaPage]
})
export class PfjavaPageModule {}
