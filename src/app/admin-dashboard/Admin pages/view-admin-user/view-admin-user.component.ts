import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service'

@Component({
  selector: 'app-view-admin-user',
  templateUrl: './view-admin-user.component.html',
  styleUrls: ['./view-admin-user.component.css']
})
export class ViewAdminUserComponent implements OnInit {


  adminUser:any
  constructor(private adminServ:AdminServiceService) { }

  ngOnInit(): void {
    let AdminId = localStorage.getItem("adminView");
    console.log("id vanne",AdminId);
    this.adminServ.getAdminUser(AdminId)
    .subscribe((data)=>{
      this.adminUser =data; 
      });
  }

}
