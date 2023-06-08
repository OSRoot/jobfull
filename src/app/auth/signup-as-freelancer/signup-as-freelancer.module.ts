import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupAsFreelancerPageRoutingModule } from './signup-as-freelancer-routing.module';

import { SignupAsFreelancerPage } from './signup-as-freelancer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupAsFreelancerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignupAsFreelancerPage]
})
export class SignupAsFreelancerPageModule { }
