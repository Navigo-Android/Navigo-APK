import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysqlPageRoutingModule } from './mysql-routing.module';

import { MysqlPage } from './mysql.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysqlPageRoutingModule
  ],
  declarations: [MysqlPage]
})
export class MysqlPageModule {}
