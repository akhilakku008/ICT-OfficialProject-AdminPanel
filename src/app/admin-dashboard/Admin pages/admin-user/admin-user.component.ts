import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth.service';
import {AdminServiceService} from '../admin-service.service'

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  searchText: any;
  
  query: any

  adminusers:any
  
  // adminUsers={
  //   username: "",
  //   password: "",
  //   email: "",
  //   add: true,
  //   delete: true,
  //   edit: true,
  //   superadmin: false,
  // }
  submitted : boolean=false;
  constructor(private adminServ:AdminServiceService,private router:Router,private route:ActivatedRoute,public auth:AuthService) { }

  ngOnInit(): void {
   
    this.adminServ.getAdminUsers()
    .subscribe((data)=>{
      this.adminusers = data;
    });

  }
  addAdmin(){
    
  }
  
  ViewUser(admin: any) {
    localStorage.setItem("adminView", admin._id.toString());
    this.router.navigate(['../view-user'], { relativeTo: this.route });
    
  }

  editUser(admin: any) {
    
    localStorage.setItem("adminEdit", admin._id.toString());    
    this.router.navigate(['../edit-admin-user'], { relativeTo: this.route });
  }
  DeleteUser(admin: any) {
    Swal.fire({
      title: `Are you sure, you want to delete the admin user ${admin.Username}?`,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
      denyButtonText: "No, cancel please!",
      showDenyButton: true,
      text: "You won't be able to revert this!",
      icon: 'warning',
      cancelButtonColor: '#d33',

    }).then((result) => {
      if (result.isConfirmed) {
        this.adminServ.deleteAdmin(admin)
          .subscribe(
            response => {
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
                    this.router.navigate(['../view-user']);
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
