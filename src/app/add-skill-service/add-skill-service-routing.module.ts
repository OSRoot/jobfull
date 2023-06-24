import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSkillServicePage } from './add-skill-service.page';

const routes: Routes = [
  {
    path: '',
    component: AddSkillServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSkillServicePageRoutingModule {}
