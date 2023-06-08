import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyhomePageRoutingModule } from './myhome-routing.module';

import { MyhomePage } from './myhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyhomePageRoutingModule
  ],
  declarations: [MyhomePage]
})
export class MyhomePageModule {}
