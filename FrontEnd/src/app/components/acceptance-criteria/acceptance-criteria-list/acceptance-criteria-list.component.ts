import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { Acceptance_criteria } from '../../../models/acceptance_criteria.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceptance-criteria-list',
  templateUrl: './acceptance-criteria-list.component.html',
  styleUrls: ['./acceptance-criteria-list.component.css']
})
export class AcceptanceCriteriaListComponent implements OnInit {

  acceptance_criteria: Acceptance_criteria[];
  message: String;

  constructor(private crud:CrudService, private router:Router) {}

  ngOnInit() {
    this.crud.list(this.crud.models.ACCEPTANCE_CRITERIA)
    .subscribe(
      (res:Acceptance_criteria[]) => {
        this.acceptance_criteria = res;
      },
      (err:HttpErrorResponse) => {
        if(err.error){
          this.message = err.error.message;
        }
        else{
          this.message = err.error.errors[0].message;
        }
      }
    )
  }

  delete(id: number){
    this.crud.delete(this.crud.models.ACCEPTANCE_CRITERIA, id)
      .subscribe(
        res => {
          this.message = 'Criterio de evaluación eliminado exitosamente';
          let i;
          for(i = 0; i < this.acceptance_criteria.length; i++){
            if(this.acceptance_criteria[i].id == id){
              this.acceptance_criteria.splice(i, 1);
              break;
            }
          }
        },
        err => {
          this.message = err.error.message;
        }
      );
  }

  onSelectEdit( id : number){
    this.router.navigate(['../../acceptance-criteria/update', id]);
  }

}
