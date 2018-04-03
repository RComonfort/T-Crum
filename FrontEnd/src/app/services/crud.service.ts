import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogService } from './log.service';

@Injectable()
export class CrudService {
  URL:string;
  headers: HttpHeaders;
  static Models = {
    TASK: "tasks",
    SPRINT: "sprints",
    PROJECT: "projects",
    MEMBER: "members",
    USER_STORY: "user_stories",
    ACCEPTANCE_CRITERIA: "acceptance_criteria",
    MEMBER_TASK:  "member-task",
    MEMBER_PROJECT : "member_project",
    PROJECT_TECHNOLOGY: "project-technology"
  };
  
  constructor(private auth:AuthService, private http:HttpClient, private log:LogService) {
    this.URL = 'http://localhost:8000/api';
    this.headers = new HttpHeaders();
    this.headers.append('ContentType', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Authorization', this.auth.getToken());
  }

  create(model:string, body:any){
    return this.log.record(model, "CREATE")
    .subscribe(
      res => {
        return this.http.post(
          this.URL + "/" + model,
          body,
          { headers: this.headers}
        );
      },
      err => {
        return err;
      }
    )
  }

  list(model:string){
    return this.http.get(
      this.URL + "/" + model,
      { headers: this.headers}
    );
  }

  retrieve(model:string, id:any){
    return this.http.get(
      this.URL + "/" + model + "/" + id,
      { headers: this.headers}
    );
  }

  update(model:string, id:any, body:any){
    return this.log.record(model, "UPDATE ID " + id)
    .subscribe(
      res => {
        return this.http.put(
          this.URL + "/" + model + "/" + id,
          body,
          { headers: this.headers}
        );
      },
      err => {
        return err;
      }
    )
  }

  delete(model:string, id:any){
    return this.log.record(model, "DELETE ID " + id)
    .subscribe(
      res => {
        return this.http.delete(
          this.URL + "/" + model + "/" + id,
          { headers: this.headers}
        );
      },
      err => {
        return err;
      }
    )
  }
}