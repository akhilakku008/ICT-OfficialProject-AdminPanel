import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
// import {AuthService} from '../auth.service'
import Swal from 'sweetalert2';

// import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  userLogin = {
    email: '',
    password: ''
  }

  constructor(private _router: Router) { }

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  loginAdmin()
  {
    this._router.navigate(['/dashboard']);
  }


  get email()
  {
    return this.loginForm.get('email');
  }
  get password()
  {
    return this.loginForm.get('password');
  }


  

  ngOnInit(): void {
  }
  loginUser() {
    // this._auth.loginUser(this.userLogin)
    //   .subscribe((data) => {
    //     console.log("login", data)
    //     this._router.navigate(['../login'])
    //   })

      }

}
