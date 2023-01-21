import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarPageRoutingModule } from './atualizar-routing.module';

import { AtualizarPage } from './atualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarPageRoutingModule
  ],
  declarations: [AtualizarPage]
})
export class AtualizarPageModule {}
