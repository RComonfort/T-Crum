import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;
  id: string;
  password: string;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['']);
    }

    this.id = '';
    this.password = '';
  }

  login(){
    if(this.validate()){
      let result = this.auth.login(this.id, this.password);
      if(result.success){
        this.router.navigate(['']);
      }
      else{
        this.message = result.errors;
        this.password = '';
      }
    }
    
    return false;
  }

  validate(){
    if(!this.id || !this.password){
      this.message = 'Debes introducir tu matrícula y contraseña.';
      return false;
    }
    else{
      this.message = '';
      return true;
    }
  }
}
