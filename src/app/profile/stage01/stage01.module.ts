import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Stage01PageRoutingModule } from './stage01-routing.module';

import { Stage01Page } from './stage01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Stage01PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Stage01Page]
})
export class Stage01PageModule { }
