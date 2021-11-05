import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimalListComponent} from "./animal-list/animal-list.component";
import {AnimalEditComponent} from "./animal-edit/animal-edit.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: AnimalListComponent
  },
  {
    path: 'edit',
    component: AnimalEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
