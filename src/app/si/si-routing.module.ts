import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiPage } from './si.page';

const routes: Routes = [
  {
    path: '',
    component: SiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiPageRoutingModule {}
