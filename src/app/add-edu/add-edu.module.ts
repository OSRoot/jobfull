import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEduPageRoutingModule } from './add-edu-routing.module';

import { AddEduPage } from './add-edu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEduPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddEduPage]
})
export class AddEduPageModule {}
