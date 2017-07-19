import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public router: Router;

//  constructor(fb:FormBuilder) {
//    this.form = fb.group({
//      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
//      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
//    });
//
//    this.email = this.form.controls['email'];
//    this.password = this.form.controls['password'];
//  }
constructor(fb:FormBuilder , router: Router) { 
   
   this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  
}
  
  public onSubmit(values:Object):void {
    // this.submitted = true;
    
   //  this.router.navigate(['./dashboard.html']);
    console.log("hello im here");
  }
}
