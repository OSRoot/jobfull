import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JopDetailPageRoutingModule } from './jop-detail-routing.module';

import { JopDetailPage } from './jop-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JopDetailPageRoutingModule
  ],
  declarations: [JopDetailPage]
})
export class JopDetailPageModule {}
