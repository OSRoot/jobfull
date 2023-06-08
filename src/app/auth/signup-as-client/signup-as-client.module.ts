import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupAsClientPageRoutingModule } from './signup-as-client-routing.module';

import { SignupAsClientPage } from './signup-as-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupAsClientPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignupAsClientPage]
})
export class SignupAsClientPageModule { }
