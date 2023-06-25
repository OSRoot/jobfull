import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientProfilePageRoutingModule } from './client-profile-routing.module';

import { ClientProfilePage } from './client-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientProfilePageRoutingModule
  ],
  declarations: [ClientProfilePage]
})
export class ClientProfilePageModule {}
