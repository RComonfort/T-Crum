import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/authentication/login/login.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { SprintRetrieveComponent } from './components/sprints/sprint-retrieve/sprint-retrieve.component';
import { SprintUpdateComponent } from './components/sprints/sprint-update/sprint-update.component';
import { SprintCreateComponent } from './components/sprints/sprint-create/sprint-create.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'', component: AppComponent, canActivate: [AuthGuard]},
  {path: 'sprints/:id', component: SprintRetrieveComponent, canActivate: [AuthGuard]},
  {path: 'sprints/update/:id', component: SprintUpdateComponent, canActivate: [AuthGuard]},
  {path: 'sprints', component: SprintCreateComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }