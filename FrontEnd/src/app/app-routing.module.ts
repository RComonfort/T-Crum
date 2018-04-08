import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/authentication/login/login.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectCreateComponent } from './components/projects/project-create/project-create.component';
import { MemberCreateComponent } from './components/member/member-create/member-create.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: MemberCreateComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'projects', component: ProjectListComponent, canActivate: [AuthGuard]},
  {path: 'projects/create', component: ProjectCreateComponent, canActivate: [AuthGuard]},
  {path:'', component: AppComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }