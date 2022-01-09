import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {AdminServiceService} from '../admin-service.service'

@Component({
  selector: 'app-add-admin-user',
  templateUrl: './add-admin-user.component.html',
  styleUrls: ['./add-admin-user.component.css']
})
export class AddAdminUserComponent implements OnInit {
  
  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";
   
  submitted = false
  add:any
   
  adminUser = {
    username       : '',
    password       : '',
    firstname      : '',
    lastname       : '',
    email          : '',
    superadmin     : false ,
    add            : true,
    edit           : true,
    delete         : true,
  }

  selectedFile:any=null;
 
  fd=new FormData();

  constructor(private adminServ:AdminServiceService,private router:Router,private route:ActivatedRoute) { }

  createFormData(event:any){
    this.selectedFile=<File>event.target.files[0];
    this.fd.append('image',this.selectedFile,this.selectedFile.name)
  }

  public imagePath:any;
 imgURL: any;
public message: any;
 preview(files:any) {
 if (files.length === 0)
  return;
 var mimeType = files[0].type;
 if (mimeType.match(/image\/*/) == null) {
  this.message = "Only images are supported.";
  return;
 }
 var reader = new FileReader();
 this.imagePath = files;
 reader.readAsDataURL(files[0]); 
 reader.onload = (_event) => { 
 this.imgURL = reader.result; 
}
}

AdduserForm=new FormGroup({
    usrname:new FormControl('',[Validators.required]),
    Fname:new FormControl('',[Validators.required]),
    Lname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    designation:new FormControl('',[Validators.required]),
    about:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required]),
    pwd:new FormControl('',[Validators.required])
    
})

get usrname()
  {
    return this.AdduserForm.get('usrname');
  }
  get Fname()
  {
    return this.AdduserForm.get('Fname');
  }
  get Lname()
  {
    return this.AdduserForm.get('Lname');
  }
  get email()
  {
    return this.AdduserForm.get('email');
  }
  get designation()
  {
    return this.AdduserForm.get('designation');
  }
  get about()
  {
    return this.AdduserForm.get('about');
  }
  get image()
  {
    return this.AdduserForm.get('image');
  }
  get pwd()
  {
    return this.AdduserForm.get('pwd');
  }
  
 

  ngOnInit(): void {
  }

  addUser() {
    // let element = <HTMLInputElement>document.getElementById('add');
    // let isChecked = element.checked //true
    // if (isChecked) {
    //   this.adminUser.add = true
    // } else {
    //   this.adminUser.add =false
    // }

    this.adminServ.newAdminUser( this.adminUser).subscribe(
      response => {
        if (response) {
          Swal.fire("Successfully Added", "success")
          .then(() => {
            this.router.navigate(['../admin-user'], { relativeTo: this.route });
          })          }
        else {
          Swal.fire("Network Error", "Please do after sometime ", "error")
            .then(() => {
              this.router.navigate(['../admin-user'], { relativeTo: this.route });
            })

        }
      })
  } 

}
