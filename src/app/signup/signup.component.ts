import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Http, Headers,Response} from "@angular/http";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
      errorMessage: string;

  constructor(private _authService:AuthService,
              private _router: Router,) { }

  ngOnInit() {
     
  }

  onSignup(form: NgForm){
    this._authService.signup(form.value.username,form.value.email,form.value.password )
    .subscribe(response => {
      alert(response.msg);

      this._router.navigate(['home']);
    },
      error => this.errorMessage = <any>error);

  }

}
