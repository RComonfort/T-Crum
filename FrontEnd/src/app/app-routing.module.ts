import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/authentication/login/login.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologiesListComponent } from './components/technologies/technologies-list/technologies-list.component';
import { MemberCreateComponent } from './components/member/member-create/member-create.component';
import { TechnologiesUpdateComponent } from './components/technologies/technologies-update/technologies-update.component';
import { ProjectCreateComponent } from './components/projects/project-create/project-create.component';
import { ProjectUpdateComponent } from './components/projects/project-update/project-update.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectRetrieveComponent } from './components/projects/project-retrieve/project-retrieve.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { TaskCreateComponent } from './components/tasks/task-create/task-create.component';
import { TaskUpdateComponent } from './components/tasks/task-update/task-update.component';


const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  {path: 'register', component: MemberCreateComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path:'', component: AppComponent, canActivate: [AuthGuard]},
  // Technologies
  { path: 'technologies', component: TechnologiesListComponent, canActivate: [AuthGuard]},
  { path: 'technologies/update/:id', component: TechnologiesUpdateComponent, canActivate: [AuthGuard]},
  //Projects
  {path: 'projects', component: ProjectListComponent, canActivate: [AuthGuard]},
  {path: 'projects/create', component: ProjectCreateComponent, canActivate: [AuthGuard]},
  {path: 'projects/update/:id', component: ProjectUpdateComponent, canActivate: [AuthGuard]},
  {path: 'projects/retrieve/:id', component: ProjectRetrieveComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'tasks', component: TaskListComponent, canActivate: [AuthGuard]},
  {path: 'tasks/create/:user_story_id', component: TaskCreateComponent, canActivate: [AuthGuard]},
  {path: 'tasks/update/:id', component: TaskUpdateComponent, canActivate: [AuthGuard]},
  {path:'', component: AppComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }