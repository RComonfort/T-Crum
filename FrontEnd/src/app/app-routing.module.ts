import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/authentication/login/login.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { SprintRetrieveComponent } from './components/sprints/sprint-retrieve/sprint-retrieve.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'sprints/:id', component: SprintRetrieveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }