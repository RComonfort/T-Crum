import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/authentication/login/login.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { MemberCreateComponent } from './components/member/member-create/member-create.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { TaskCreateComponent } from './components/tasks/task-create/task-create.component';
import { UserStoryCreateComponent } from './components/user-stories/user-story-create/user-story-create.component';
import { UserStoryListComponent } from './components/user-stories/user-story-list/user-story-list.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: MemberCreateComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'tasks', component: TaskListComponent, canActivate: [AuthGuard]},
  {path: 'tasks/create/:user_story_id', component: TaskCreateComponent, canActivate: [AuthGuard]},
  {path: 'user-stories', component: UserStoryListComponent, canActivate: [AuthGuard]},
  {path: 'user-stories/create/:sprint_id', component: UserStoryCreateComponent, canActivate: [AuthGuard]},
  {path:'', component: AppComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }