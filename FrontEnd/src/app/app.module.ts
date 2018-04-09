import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { CrudService } from './services/crud.service';
import { LogService } from './services/log.service';

import { LoginComponent } from './components/authentication/login/login.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { TechnologiesListComponent } from './components/technologies/technologies-list/technologies-list.component';
import { TechnologiesCreateComponent } from './components/technologies/technologies-create/technologies-create.component';
import { MemberCreateComponent } from './components/member/member-create/member-create.component';
import { TechnologiesUpdateComponent } from './components/technologies/technologies-update/technologies-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    NavComponent,
    ProjectListComponent,
    TechnologiesListComponent,
    TechnologiesCreateComponent,
    TechnologiesUpdateComponent,
    MemberCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    CrudService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
