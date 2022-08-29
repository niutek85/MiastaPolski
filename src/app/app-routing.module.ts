import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiastaComponent } from './miasta/miasta.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: 'miasta', component:MiastaComponent},
  {path: 'users',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
