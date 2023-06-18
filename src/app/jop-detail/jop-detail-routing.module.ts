import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JopDetailPage } from './jop-detail.page';

const routes: Routes = [
  {
    path: '',
    component: JopDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JopDetailPageRoutingModule {}
