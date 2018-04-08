import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import {Acceptance_criteria} from '../../../models/acceptance_criteria.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-acceptance-criteria-create',
  templateUrl: './acceptance-criteria-create.component.html',
  styleUrls: ['./acceptance-criteria-create.component.css']
})
export class AcceptanceCriteriaCreateComponent implements OnInit {
  acceptance_criteria: Acceptance_criteria;
  message: String;

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.acceptance_criteria.id = null;
    this.acceptance_criteria.name = null;
    this.acceptance_criteria.type = null;
  }

  create(){
    if(this.validate()){
      this.crud.create(this.crud.models.ACCEPTANCE_CRITERIA, this.acceptance_criteria)
      .subscribe(
        (res:Acceptance_criteria) => {
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
  }

  validate(){
    if(!this.acceptance_criteria.name || !this.acceptance_criteria.type){
      this.message = 'Debes introducir el nombre y tipo de criterio de aceptación.';
      return false;
    }
    else{
      this.message = '';
      return true;
    }
  }

}
