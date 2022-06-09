import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { EditmodalComponent } from './editmodal/editmodal.component';
// const appRoutes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: '/home', component: HomeComponent },
//   { path: '/user-info', component: UserInfoComponent },
//   { path: '/fetch-data', component: FetchDataComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserInfoComponent,
    EditmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
