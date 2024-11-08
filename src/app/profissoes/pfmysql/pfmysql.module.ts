import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfmysqlPageRoutingModule } from './pfmysql-routing.module';

import { PfmysqlPage } from './pfmysql.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfmysqlPageRoutingModule
  ],
  declarations: [PfmysqlPage]
})
export class PfmysqlPageModule {}
