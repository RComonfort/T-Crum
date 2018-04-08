import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CrudService } from '../../../services/crud.service';
import { Router } from '@angular/router';
import { Member } from '../../../models/member.model';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {
  message: string;
  member: Member;
  password2: string;

  constructor(private auth:AuthService, private router:Router, private crud:CrudService) { }

  ngOnInit() {

    if(this.auth.isLoggedIn()){
      this.router.navigate(['home'])
    }

    this.member.id = '';
    this.member.name = '';
    this.member.department_major = '';
    this.member.password = '';
    this.password2 = '';
  }

  /**
   * Method to create a member with the parameters
   * that are asked for in the registration view.
   */
  createMember(){

    if(this.validateNonEmptyFields() && this.validatePasswordConfirmation()){

      this.crud.create(this.crud.models.MEMBER, this.member)
      .subscribe(
        res => {

          /*  
            Ideally, a message of success should be displayed
            to let the user know that the registration was
            successful. So far, we're only taking the user 
            to the login view.
          */
          this.router.navigate(['login']);
        },
        err => {
          this.message = err.error.message;
          this.member.id = '';
          this.member.name = '';
          this.member.department_major = '';
          this.member.password = '';
          this.password2 = '';
        }
      )
    }

    return false;
  }

  /**
   * Method to validate that all fields have been entered
   * (they're all necessary). If at least one of the fields
   * hasn't been entered, then a message displaying what the
   * problem is should be displayed.
   * 
   * @returns True, if all fields have been entered. Else,
   * return false.
   */
  validateNonEmptyFields(){
    if(!this.member.id || !this.member.name || !this.member.department_major || !this.member.password || this.password2){
      this.message = 'Debes introducir tu matrícula, nombre, carrera o departamento, contraseña y la confirmación de la misma.';
      return false;
    }
    else{
      this.message = '';
      return true;
    }
  }

  /**
   * Method to validate that the password was correctly
   * confirmed.
   * 
   * @returns True, if exactly the same password was entered
   * twice. Else, false.
   */
  validatePasswordConfirmation(){

    return this.member.password == this.password2;
  }
}
