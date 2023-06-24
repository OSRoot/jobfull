import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSkillServicePageRoutingModule } from './add-skill-service-routing.module';

import { AddSkillServicePage } from './add-skill-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSkillServicePageRoutingModule
  ],
  declarations: [AddSkillServicePage]
})
export class AddSkillServicePageModule {}
