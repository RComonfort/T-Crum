import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Project } from '../../../models/project.model';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  message: string;
  projects: Project[];

  constructor(private crud:CrudService) { }

  ngOnInit() {
    this.crud.list(this.crud.models.PROJECT)
    .subscribe(
      (res:Project[])=>{
        console.log(res);
        this.projects = res;
      },
      (err:HttpErrorResponse) => {
        if(err.error){
          this.message = err.error.message
        }
        else{
          this.message = err.error.errors[0].message;
        }
      }
    )
  }

  deleteProject(id: number){
    console.log("Deleting")
    this.crud.delete(this.crud.models.PROJECT, id)
    .subscribe(
      (res:Response) => {
        this.message = "Succes";
        let x = 0;
        for(let project of this.projects){
          if(project.id == id){

            this.projects.splice(x, 1);
          }
          x++;
        }
      },
      (err:HttpErrorResponse) => {
        if(err.error){
          this.message = err.error.message
        }
        else{
          this.message = err.error.errors[0].message;
        }
      }
    )
  }
}
