import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProposalPageRoutingModule } from './edit-proposal-routing.module';

import { EditProposalPage } from './edit-proposal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProposalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditProposalPage]
})
export class EditProposalPageModule {}
