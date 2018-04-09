import { Component, OnInit } from '@angular/core';
import { User_story } from '../../../models/user_story.model';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-story-create',
  templateUrl: './user-story-create.component.html',
  styleUrls: ['./user-story-create.component.css']
})
export class UserStoryCreateComponent implements OnInit {

  message: string;
  user_story: User_story;

  constructor(private crud:CrudService) { }

  ngOnInit() {
    this.user_story.id = 0;
    this.user_story.weight = 0;
    this.user_story.scrum_board_status = 0;
    this.user_story.description = '';
    this.user_story.priority = 0;
  }

}
