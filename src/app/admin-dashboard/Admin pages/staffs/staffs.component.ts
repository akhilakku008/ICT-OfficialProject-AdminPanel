import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AdminServiceService} from '../admin-service.service'
import Swal from 'sweetalert2';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {

  searchText:any;
  query:any
  staffs:any

  // name:String,
  // designation: String,
  // image: String,
  // about: String,
  // email :String,
  // role:Boolean
  constructor(private adminServ:AdminServiceService,private router:Router,private route:ActivatedRoute,public auth:AuthService) { }

  ngOnInit(): void {
    this.adminServ.getstaffs().subscribe((data)=>{
      this.staffs=JSON.parse(JSON.stringify(data));
    })
  }
  AddStaff() {
    this.router.navigate(['../add-staffs'], { relativeTo: this.route });
  }

  ViewStaff(staff: any) {

    localStorage.setItem("EditStaffID", staff._id.toString());
    this.router.navigate(['../view-staff'], { relativeTo: this.route });
  }

  editStaff(staff: any) {

    localStorage.setItem("EditStaffID2", staff._id.toString());    
    this.router.navigate(['../edit-staffs'], { relativeTo: this.route });
  }

 DeleteStaff(staff: any) {
  console.log("deletion stuck")
  Swal.fire({
    title: "Are you sure?",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Yes, Delete it!",
    denyButtonText: "No, cancel please!",
    showDenyButton: true,
    text: "You won't be able to revert this!",
    icon: 'warning',
    cancelButtonColor: '#d33',

  }).then((result) => {
    if (result.isConfirmed) {
      this.adminServ.deletestaff(staff)
        .subscribe(
          response => {
            console.log("deletion sucess",response)
            if (response) {
              Swal.fire("Sucessfully Deleted", "success")
                .then(() => {
                  let currentUrl = this.router.url;
                  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                  this.router.navigate([currentUrl]);
                  });
                })
            }
            else {
              Swal.fire("Network Error", "Please do after sometime ", "error")
                .then(() => {
                  this.router.navigate(['../staffs']);
                })


            }
          }

        )

    }
    else {
      Swal.fire("Cancelled", "Your  Staff record is safe ", "error");
    }

  })

   
 }

  
  
}
