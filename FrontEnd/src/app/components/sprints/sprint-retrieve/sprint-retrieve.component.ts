import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Sprint } from '../../../models/sprint.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sprint-retrieve',
  templateUrl: './sprint-retrieve.component.html',
  styleUrls: ['./sprint-retrieve.component.css']
})
export class SprintRetrieveComponent implements OnInit {

  message: string;
  sprints: Sprint[];

  constructor(private crud: CrudService, private route: ActivatedRoute) {}
  public id;

  ngOnInit() {

    this.id = this.route.snapshot.params['id']
    
    this.crud.retrieve(this.crud.models.SPRINT, this.id)
      .subscribe(
        (res: Sprint[]) => {
          console.log(res);
          this.sprints = res;
          this.id = this.route.snapshot.params['id'];
        },
        (err: HttpErrorResponse) => {
          if (err.error) {
            this.message = err.error.message
          }
          else {
            this.message = err.error.errors[0].message;
          }
        }
      )
  }

  deleteSprint(id: number) {
    console.log("Deleting")
    this.crud.delete(this.crud.models.SPRINT, id)

    .subscribe(
      (res: Response) => {
        this.message = "Succes";
        let x = 0;

        for (let sprint of this.sprints) {
          if (sprint.id == id) {
            this.sprints.splice(x, 1);
          }

          x++;
        }
      },

      (err: HttpErrorResponse) => {
        if (err.error) {
          this.message = err.error.message
        }
        else {
          this.message = err.error.errors[0].message;
        }
      }
    )
  }
}
