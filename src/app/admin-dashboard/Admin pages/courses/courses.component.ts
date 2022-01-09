import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {AdminServiceService} from '../admin-service.service'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  title = 'Courses';

  searchText: any;
  public searchCourseTitle: any;
  query: any;

  courses: any;
  status :any

  // index:any

  // simpleAlert(){
  //   Swal.fire('Hello world!');
  // }
  // Coursemain:any
  
  constructor(private adminServ: AdminServiceService, private router: Router, private route: ActivatedRoute, public auth: AuthService) {
    console.log("edit token",auth.edit)
   }
  
  

  ngOnInit(): void {
    this.adminServ.getCourses().subscribe((data) => {
         this.courses = data
       console.log(data)
      this.router.navigate(["courses"])

      let myContainer = <HTMLElement>document.getElementById('reg');

       if (data.Reg_Status == 0) {
        myContainer.innerHTML = "closed"
      } else if (data.Reg_Status == 1) {
        myContainer.innerHTML = "open"    
      }
      else if (data.reg_Status == 2) {
        myContainer.innerHTML = "comming soon"
      }
    })

  }

  //?delete dialogue box
  // DeleteCourse() {
  //   Swal.fire({
  //     title: 'Are you sure want to delete?',
  //     text: 'You will not be able to recover this file!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, keep it',
  //   }).then((result) => {
  //     this.adminServ.deleteCourse(this.courses)
  //       .subscribe(data => {
  //         if (data) {
  //           Swal.fire('Deleted!', 'file is successfully deleted.', 'success');
  //           this.router.navigate(['../courses'])
  //         } else if (result.dismiss === Swal.DismissReason.cancel) {
  //           Swal.fire('Cancelled', 'file is not deleted :)', 'error');
  //           this.router.navigate(['../courses'])
  //         }
  //     })
     
  //   });
  // }

  //del
  
  
  DeleteCourse(course : any) {   
    Swal.fire({
     title: `Are you sure to delete the course ${course.courseTitle}?`,
     confirmButtonColor: "#3085d6",
     confirmButtonText: "Yes, Delete it!",
     denyButtonText: "No, Cancel please!",
     showDenyButton: true,
     text: "You won't be able to revert this!",
     icon: 'warning',
     cancelButtonColor: '#d33',
   }).then((result) => {
     if (result.isConfirmed) {
       this.adminServ.deleteCourse(course)
         .subscribe(
           response => {
             if (response) {
               Swal.fire("Successfully Deleted","","success")
               .then(()=>{
                 let currentUrl = this.router.url;
                 this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                     this.router.navigate([currentUrl]);
                 });
               })
             }
             else {
               Swal.fire("Network Error", "Please do after sometime ", "error")
               .then(()=>{
                 this.router.navigate(['../courses'], { relativeTo: this.route });
               })
 
             }
           }
 
         )
 
     } else {
       Swal.fire("Cancelled", "Your course record is safe ", "error");
     }
 
   })
 }

  

  
  

  //!delete end

  ViewCourse(course:any) {
      localStorage.setItem("adminViewCourse", course._id.toString());
    this.router.navigate(['../view-course'], { relativeTo: this.route });

  }
  editCourse(course: any) {
    localStorage.setItem("EditCourse", course._id.toString());
    this.router.navigate(['../edit-courses'], { relativeTo: this.route });
  }



}
