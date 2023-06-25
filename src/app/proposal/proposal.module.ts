import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposalPageRoutingModule } from './proposal-routing.module';

import { ProposalPage } from './proposal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposalPageRoutingModule
  ],
  declarations: [ProposalPage]
})
export class ProposalPageModule {}
