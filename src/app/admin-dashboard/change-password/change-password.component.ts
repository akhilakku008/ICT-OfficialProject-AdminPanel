import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private _router: Router) { }

  resetForm=new FormGroup({
    old_pass:new FormControl('',[Validators.required]),
    new_pass:new FormControl('',[Validators.required]),
    cnew_pass:new FormControl('',[Validators.required])
  })

  reset()
  {
    this._router.navigate(['/dashboard']);
  }


  get old_pass()
  {
    return this.resetForm.get('old_pass');
  }
  get new_pass()
  {
    return this.resetForm.get('new_pass');
  }
  get cnew_pass()
  {
    return this.resetForm.get('cnew_pass');
  }

  ngOnInit(): void {
  }

}
