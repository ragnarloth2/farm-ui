import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FarmListComponent} from './farm-list/farm-list.component';
import {FarmEditComponent} from './farm-edit/farm-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: FarmListComponent
  },
  {
    path: 'edit',
    component: FarmEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmRoutingModule { }
