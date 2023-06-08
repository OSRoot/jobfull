import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stage01Page } from './stage01.page';

const routes: Routes = [
  {
    path: '',
    component: Stage01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Stage01PageRoutingModule {}
