import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfbootstrapPageRoutingModule } from './pfbootstrap-routing.module';

import { PfbootstrapPage } from './pfbootstrap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfbootstrapPageRoutingModule
  ],
  declarations: [PfbootstrapPage]
})
export class PfbootstrapPageModule {}
