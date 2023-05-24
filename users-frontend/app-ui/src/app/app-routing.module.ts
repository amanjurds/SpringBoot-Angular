import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path:'users', component: UsersListComponent},
  {path:'add-user', component: AddUserComponent},
  {path:'update-user/:id', component: UpdateUserComponent},
  {path:'user/:id', component: UserDetailsComponent},
  {path:'', redirectTo:'/users', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
