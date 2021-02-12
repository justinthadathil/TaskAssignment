import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {aboutComponent} from './about-us/about.component';
import {taskmainComponent} from './task-main/task-main.component'

const routes: Routes = [
  {
    path: 'Welcome',
    component: aboutComponent
  },
  {
    path: 'Task-Home',
    component:taskmainComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Welcome'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  /* declarations: [
    aboutComponent
  ], */
  exports: [RouterModule]
})
export class AppRoutingModule { }
