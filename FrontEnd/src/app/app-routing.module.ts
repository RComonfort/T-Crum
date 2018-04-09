import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/authentication/login/login.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologiesListComponent } from './components/technologies/technologies-list/technologies-list.component';
import { AcceptanceCriteriaEditComponent } from './components/acceptance-criteria/acceptance-criteria-edit/acceptance-criteria-edit.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path:'', component: AppComponent, canActivate: [AuthGuard]},

  // Technologies
  { path: 'technologies', component: TechnologiesListComponent, canActivate: [AuthGuard]},

  //Acceptance_criteria
  { path:'acceptance-criteria/update/:id', component: AcceptanceCriteriaEditComponent, canActivate: [AuthGuard]},
  

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }