import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiPageRoutingModule } from './si-routing.module';

import { SiPage } from './si.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiPageRoutingModule
  ],
  declarations: [SiPage]
})
export class SiPageModule {}
