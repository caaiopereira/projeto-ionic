import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizarPage } from './atualizar.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarPageRoutingModule {}
