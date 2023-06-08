import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stage02Page } from './stage02.page';

const routes: Routes = [
  {
    path: '',
    component: Stage02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stage02PageRoutingModule {}
