import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { Sprint } from '../../../models/sprint.model';
import { Project } from '../../../models/project.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-create',
  templateUrl: './sprint-create.component.html',
  styleUrls: ['./sprint-create.component.css']
})

export class SprintCreateComponent implements OnInit {
  sprint: Sprint;
  project: Project;
  message: String;

  constructor(private crud: CrudService, private router:Router) { }

  ngOnInit() {
    this.sprint = new Sprint(null, null, null, null, null, null);
    
  }

  create(){
    console.log(this.sprint);
    if(this.validate()){
      this.crud.create(this.crud.models.SPRINT, this.sprint)
      .subscribe(
        (res:Sprint) => {

          this.router.navigate(['home'])

          this.sprint = res;
        },
        (err:HttpErrorResponse) => {
          console.log(err);
          if(err.error){
            this.message = err.error.message;
          }
          else{
            this.message = err.error.errors[0].message;
          }
        }
      )
    }
    return false;
  }

  validate(){
    if(!this.sprint.days){
      this.message = 'Debes introducir los días del sprint.';
      return false;
    }
    else{
      this.message = '';
      console.log('Validado.');
      return true;
    }
  }

}
