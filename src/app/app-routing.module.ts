import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiastaComponent } from './miasta/miasta.component';

const routes: Routes = [
  {path: 'miasta', component:MiastaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
