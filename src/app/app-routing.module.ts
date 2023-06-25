import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/auth-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signup-as-freelancer',
    loadChildren: () => import('./auth/signup-as-freelancer/signup-as-freelancer.module').then(m => m.SignupAsFreelancerPageModule)
  },
  {
    path: 'signup-as-client',
    loadChildren: () => import('./auth/signup-as-client/signup-as-client.module').then(m => m.SignupAsClientPageModule)
  },
  {
    path: 'login',
    canActivate: [AuthGuardGuard],
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'choose',
    loadChildren: () => import('./choose/choose.module').then(m => m.ChoosePageModule)
  },
  {
    path: 'stage01',
    loadChildren: () => import('./profile/stage01/stage01.module').then(m => m.Stage01PageModule)
  },
  {
    path: 'stage02',
    loadChildren: () => import('./profile/stage02/stage02.module').then(m => m.Stage02PageModule)
  },

  {
    path: 'myhome',
    loadChildren: () => import('./myhome/myhome.module').then(m => m.MyhomePageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then(m => m.MyprofilePageModule),

  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesPageModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then( m => m.JobsPageModule)
  },
  {
    path: 'account-settings',
    loadChildren: () => import('./account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  },
  {
    path: 'add-edu',
    loadChildren: () => import('./add-edu/add-edu.module').then( m => m.AddEduPageModule)
  },
  {
    path: 'jop-detail/:id',
    loadChildren: () => import('./jop-detail/jop-detail.module').then( m => m.JopDetailPageModule)
  },
  {
    path: 'update-freelancer',
    loadChildren: () => import('./update-freelancer/update-freelancer.module').then( m => m.UpdateFreelancerPageModule)
  },
  {
    path: 'add-skill-service',
    loadChildren: () => import('./add-skill-service/add-skill-service.module').then( m => m.AddSkillServicePageModule)
  },
  {
    path: 'proposal',
    loadChildren: () => import('./proposal/proposal.module').then( m => m.ProposalPageModule)
  },
  {
    path: 'client-profile',
    loadChildren: () => import('./client-profile/client-profile.module').then( m => m.ClientProfilePageModule)
  },
  {
    path: 'edit-proposal/:id',
    loadChildren: () => import('./edit-proposal/edit-proposal.module').then( m => m.EditProposalPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
