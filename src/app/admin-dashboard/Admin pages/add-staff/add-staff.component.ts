import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {AdminServiceService} from '../admin-service.service'

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  staffDetails:any = {
    name: "",
    designation: "",
    about: "",
    image: ""
  }

  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";

  
  selectedFile:any=null;
  fd=new FormData();

  constructor(private adminServ:AdminServiceService,private router:Router,private route:ActivatedRoute) { }

  createFormData(event:any){
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file1', this.selectedFile, this.selectedFile.name);
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

Addstaff=new FormGroup({
  name:new FormControl('',[Validators.required]),
  designation:new FormControl('',[Validators.required]),
  about:new FormControl('',[Validators.required]),
  img:new FormControl('',[Validators.required])
  
})

get name()
{
  return this.Addstaff.get('name');
}
get designation()
{
  return this.Addstaff.get('designation');
}
get about()
{
  return this.Addstaff.get('about');
}

get img()
{
  return this.Addstaff.get('img');
}



  addstaff() {
    
   
    for (const prop in this.staffDetails)
    {
      this.fd.append(prop, this.staffDetails[prop]);
    }
    console.log("checkkkk success")
    this.adminServ.newStaff(this.fd).subscribe(
      response => {
        if (response) {
          Swal.fire("Successfully Added", "success")
            .then(() => {
              this.router.navigate(['../staffs'], { relativeTo: this.route });
            })
        }
        else {
          Swal.fire("Network Error", "Please do after sometime ", "error")
            .then(() => {
              this.router.navigate(['../staffs'], { relativeTo: this.route });
            })

        }
      })
}


  ngOnInit(): void {
  }

}
