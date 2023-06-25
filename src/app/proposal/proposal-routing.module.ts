import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposalPage } from './proposal.page';

const routes: Routes = [
  {
    path: '',
    component: ProposalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposalPageRoutingModule {}
