import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EditmodalComponent } from './editmodal/editmodal.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
const routes: Routes = [
  //   {
  // path:'',redirectTo:LoginComponent
  //   },
  {
    path: '',
    // redirectTo: 'login',
    component: LoginComponent,
    // pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user-info',
    component: UserInfoComponent,
  },
  {
    path: 'editmodal',
    component: EditmodalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
