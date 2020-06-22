import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountSelectComponent } from './components/account-select/account-select.component';
import { AccountTypeSelectComponent } from './components/account-type-select/account-type-select.component';
import { AccountConfirmComponent } from './components/account-confirm/account-confirm.component';

const routes: Routes = [

  {
    path: 'home',component: AccountSelectComponent
  },
  {
    path: 'type',component: AccountTypeSelectComponent
  },
  {
    path: 'confirm',component: AccountConfirmComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
