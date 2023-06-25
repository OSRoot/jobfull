import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProposalPage } from './edit-proposal.page';

const routes: Routes = [
  {
    path: '',
    component: EditProposalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProposalPageRoutingModule {}
