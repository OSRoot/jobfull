import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateFreelancerPageRoutingModule } from './update-freelancer-routing.module';

import { UpdateFreelancerPage } from './update-freelancer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateFreelancerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateFreelancerPage]
})
export class UpdateFreelancerPageModule {}
