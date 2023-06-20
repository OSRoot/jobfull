import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsPageRoutingModule } from './jobs-routing.module';

import { JobsPage } from './jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [JobsPage]
})
export class JobsPageModule {}
