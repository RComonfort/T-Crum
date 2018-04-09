import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Sprint } from '../../../models/sprint.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sprint-update',
  templateUrl: './sprint-update.component.html',
  styleUrls: ['./sprint-update.component.css']
})
export class SprintUpdateComponent implements OnInit {

  sprint: Sprint;
  message: string;

  constructor(private crud: CrudService, private route: ActivatedRoute) {}


  ngOnInit() {
    this.sprint = new Sprint(null, null, null, null, null, null);
    let id = this.route.snapshot.params.id;
    this.crud.retrieve(this.crud.models.SPRINT, id)

    .subscribe(
      (res:Sprint) => {
        this.sprint = res;
      },
      (err:HttpErrorResponse) => {
        console.log(err);

        if(err.error){
          this.message = err.error.message;
        }
        else {
          this.message = err.error.errors[0].message;
        }
      }
    )
  }

  update(){
    console.log(this.sprint);
    if(this.validate()){
      this.crud.update(this.crud.models.SPRINT, this.sprint.id, this.sprint)
      .subscribe(
        (res: Sprint) => {
          this.sprint = res;
        },
        (err: HttpErrorResponse) => {
          if(err.error){
            this.message = err.error.message;
          }
          else {
            this.message = err.error.errors[0].message;
          }
        }
      )
    }
    return false;
  }

  validate(){
    if(!this.sprint.days){
      this.message = 'Debes de introducir un número positivo.';
      return false;
    }

    else {
      this.message = '';
      console.log('Validado');
    }
  }
}
