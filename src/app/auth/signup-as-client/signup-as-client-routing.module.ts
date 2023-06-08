import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupAsClientPage } from './signup-as-client.page';

const routes: Routes = [
  {
    path: '',
    component: SignupAsClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupAsClientPageRoutingModule {}
