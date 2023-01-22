import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmPageRoutingModule } from './adm-routing.module';

import { AdmPage } from './adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmPageRoutingModule
  ],
  declarations: [AdmPage]
})
export class AdmPageModule {}
