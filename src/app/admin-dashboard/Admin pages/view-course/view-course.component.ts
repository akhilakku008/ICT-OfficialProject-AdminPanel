import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../admin-service.service'

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
   
  singleCourse:any

  constructor(public adminServ:AdminServiceService) { }

  ngOnInit(): void {
    let CourseId = localStorage.getItem("adminViewCourse");
    this.adminServ.getSingleCourse(CourseId)
    .subscribe((courseItem)=>{
      this.singleCourse =courseItem;
      console.log(this.singleCourse);
      });
  }

}
