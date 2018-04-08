import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';

import { AuthService } from './services/auth.service';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { CrudService } from './services/crud.service';
import { LogService } from './services/log.service';
import { NavComponent } from './components/nav/nav.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';

import { SprintListComponent } from './components/sprints/sprint-list/sprint-list.component';
import { SprintRetrieveComponent } from './components/sprints/sprint-retrieve/sprint-retrieve.component';
import { TechnologiesListComponent } from './components/technologies/technologies-list/technologies-list.component';
import { TechnologiesCreateComponent } from './components/technologies/technologies-create/technologies-create.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    NavComponent,
    ProjectListComponent,
<<<<<<< HEAD
    SprintListComponent,
    SprintRetrieveComponent
=======
    TechnologiesListComponent,
    TechnologiesCreateComponent
>>>>>>> 6932cb96ad7b99c214e0d8463c640d72e9bcf077
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
