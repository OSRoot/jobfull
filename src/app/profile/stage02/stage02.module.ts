import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Stage02PageRoutingModule } from './stage02-routing.module';

import { Stage02Page } from './stage02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stage02PageRoutingModule
  ],
  declarations: [Stage02Page]
})
export class Stage02PageModule {}
