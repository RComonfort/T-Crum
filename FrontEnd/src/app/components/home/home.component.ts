import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:string;

  constructor(private crud:CrudService) { }

  ngOnInit() {
    this.message = "Ready";
  }

  clicked(){
    this.crud.list(this.crud.Models.LOGS)
    .subscribe(
      res => {
        console.log(res);
        this.message = "Success";
      },
      error => {
        this.message = error.error.message;
      }
    );
  }
}
