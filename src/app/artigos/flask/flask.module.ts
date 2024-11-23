import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlaskPageRoutingModule } from './flask-routing.module';

import { FlaskPage } from './flask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlaskPageRoutingModule
  ],
  declarations: [FlaskPage]
})
export class FlaskPageModule {}
