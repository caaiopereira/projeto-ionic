import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmPage } from './adm.page';

const routes: Routes = [
  {
    path: '',
    component: AdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmPageRoutingModule {}
