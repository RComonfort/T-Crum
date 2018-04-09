import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/authentication/login/login.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologiesListComponent } from './components/technologies/technologies-list/technologies-list.component';
import { MemberCreateComponent } from './components/member/member-create/member-create.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  {path: 'register', component: MemberCreateComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path:'', component: AppComponent, canActivate: [AuthGuard]},
  // Technologies
  { path: 'technologies', component: TechnologiesListComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }