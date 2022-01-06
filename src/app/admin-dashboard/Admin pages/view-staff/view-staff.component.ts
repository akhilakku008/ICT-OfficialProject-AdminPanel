import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminServiceService} from '../admin-service.service'

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {
   
  staffItem: any
  imgPrev:any;
  name:any;
  designation:any;
  about:any;
   
  constructor(private AdminServ:AdminServiceService,private router:Router) { }

  ngOnInit(): void {
    let staffId = localStorage.getItem("EditStaffID");
    this.AdminServ.getstaff(staffId).subscribe((data) => {
      console.log(data);
      this.staffItem = JSON.parse(JSON.stringify(data));
      this.imgPrev = this.staffItem.image;
      this.name = this.staffItem.name;
      this.designation = this.staffItem.designation;
      this.about = this.staffItem.about;
    })
  }

}
