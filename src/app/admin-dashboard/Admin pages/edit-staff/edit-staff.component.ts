import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {

  staffItem:any = {
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
 
  submitted = false;
  constructor(private adminServ:AdminServiceService,private router:Router,private route:ActivatedRoute) { }

  createFormData(event:any){
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file1', this.selectedFile, this.selectedFile.name);
  }

  public imagePath:any;
 imgURL: any;
 public message:any;
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


Editstaff=new FormGroup({
  name:new FormControl('',[Validators.required]),
  designation:new FormControl('',[Validators.required]),
  about:new FormControl('',[Validators.required]),
  img:new FormControl('',[Validators.required])
  
})

get name()
{
  return this.Editstaff.get('name');
}
get designation()
{
  return this.Editstaff.get('designation');
}
get about()
{
  return this.Editstaff.get('about');
}

get img()
{
  return this.Editstaff.get('img');
}




  ngOnInit(): void {
    this.submitted = false;
    let staffId = localStorage.getItem("EditStaffID2");
    this.adminServ.getstaff(staffId).subscribe((data) => {
      console.log(data);
      this.staffItem = JSON.parse(JSON.stringify(data));
    })
  }

  
editstaff(){

    for (const prop in this.staffItem)
    {
      this.fd.append(prop, this.staffItem[prop]);
    }

  this.adminServ.editStaff(this.fd)
  .subscribe(
    response => {
      if (response) {
        Swal.fire("Successfully Updated", "", "success")
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
    });
  
}

}
