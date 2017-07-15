import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _authService:AuthService) { }

  ngOnInit() {
     
  }

  onSignup(form: NgForm){
    this._authService.signup(form.value.username,form.value.email,form.value.password )
    .subscribe(
      response => console.log(response)
    );
  }

}
