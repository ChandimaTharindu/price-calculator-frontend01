import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculaterComponent } from './calculater/calculater.component';
import { TableComponent } from './table/table.component';


const appRoutes: Routes = [
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'calculater',
    component: CalculaterComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/