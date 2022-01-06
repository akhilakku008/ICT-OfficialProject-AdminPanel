import { Component, OnInit } from '@angular/core';
import { AdminServiceService} from '../admin-service.service'

@Component({
  selector: 'app-view-testimony',
  templateUrl: './view-testimony.component.html',
  styleUrls: ['./view-testimony.component.css']
})
export class ViewTestimonyComponent implements OnInit {
  
  testimonialItem:any; 
  // imgPrev:any;
  name:any;
  position:any;
  organisation:any;
  testimony:any;
  courseTitle: any;
  image:any

  constructor(private adminServe:AdminServiceService) { }

  ngOnInit(): void {
    let testimonialId = localStorage.getItem("ViewTestimonial");
    console.log(testimonialId);
    this.adminServe.gettestimonial(testimonialId).subscribe((data)=>{
      console.log(data);
      this.testimonialItem = data
    // this.name =this.testimonialItem.name;
    // this.position =this.testimonialItem.position;
    // this.organisation =this.testimonialItem.organisation;
    // this.courseTitle =this.testimonialItem.course_title;  
    // this.testimony =this.testimonialItem.testimony;
  })
  }

}
