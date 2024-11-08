import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavaScriptPageRoutingModule } from './javascript-routing.module';

import { JavaScriptPage } from './javascript.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavaScriptPageRoutingModule
  ],
  declarations: [JavaScriptPage]
})
export class JavaScriptPageModule {}
