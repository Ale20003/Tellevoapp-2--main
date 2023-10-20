import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoPageRoutingModule } from './no-routing.module';

import { NoPage } from './no.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoPageRoutingModule
  ],
  declarations: [NoPage]
})
export class NoPageModule {}
