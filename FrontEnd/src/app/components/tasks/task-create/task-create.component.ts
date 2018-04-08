import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  message: string;

  duration: number;
  name: string;
  completed: boolean;
  user_story_id: number;

  constructor(private crud:CrudService, private router:Router) { }

  ngOnInit() {
    this.message = "Creation component ready";

    this.duration = 0;
    this.name = "";
    this.completed = false;

  }

  createTask()
  {
    console.log ("Creating task")

    let body = {
      duration: this.duration,
      name: this.name,
      completed: this.completed,
      user_story_id: 1//this.user_story_id
    };

    this.crud.create (this.crud.models.TASK, body)  
    .subscribe (
      (res: Response) => {
        this.router.navigate(['products'])
      },
      (err:HttpErrorResponse) => {
        if(err.error){
          this.message = err.error.message;
        }
        else{
          this.message = err.error.errors[0].message;
        }
      }
    );
  }
  

}
