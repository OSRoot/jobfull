import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEduPage } from './add-edu.page';

const routes: Routes = [
  {
    path: '',
    component: AddEduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEduPageRoutingModule {}
