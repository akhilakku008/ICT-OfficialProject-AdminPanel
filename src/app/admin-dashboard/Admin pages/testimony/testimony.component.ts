import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AdminServiceService} from '../admin-service.service'
import Swal from 'sweetalert2';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

searchText:any;
  query: any
  
// testimonials=[
//   {
//     image:"",
//     name:"",
//     position:"",
//     organisation:"",
//     message:""
//   }
// ]
  testimonials:any
  constructor(private adminServe:AdminServiceService,private router:Router,private route:ActivatedRoute,public auth:AuthService) { }

  ngOnInit(): void {
    
    this.adminServe.gettestimonials().subscribe((testimonials) => {
      console.log("testiii coming",testimonials);
      this.testimonials= testimonials;
    })
  }

  addTestimonial() {
    this.router.navigate(['../add-testimony'], { relativeTo: this.route });
  }



  Viewtesti(testi:any) {
    localStorage.setItem("ViewTestimonial", testi._id.toString());
    this.router.navigate(['../view-testimony'], { relativeTo: this.route });
  }

  edittesti(testi:any) {
       localStorage.setItem("EditTestimonial", testi._id.toString());
    this.router.navigate(['../edit-testimony'], { relativeTo: this.route });
  }



  Deletetesti(testi:any){
      Swal.fire({
        title: `Are you sure to delete the Testimonial?`,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, Delete it!",
        denyButtonText: "No, Cancel please!", 
        showDenyButton: true,
        text: "You won't be able to revert this!",
        icon: 'warning',
        cancelButtonColor: '#d33',
  
      }).then((result) => {
        if (result.isConfirmed) {
          this.adminServe.deletetestimonial(testi)
            .subscribe(
              response => {
                console.log(response, 'check deleted or not');
                if (response) {
                  Swal.fire("Successfully Deleted", "", "success")
                    .then(() => {
                      let currentUrl = this.router.url;
                      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                        this.router.navigate([currentUrl]);
                      });
                    })
                }
                else {
                  Swal.fire("Network Error", "Please do after sometime ", "error")
                    .then(() => {
                      this.router.navigate(['../testimony'], { relativeTo: this.route });
                    })
  
                }
              }
  
            )
  
        } else {
          Swal.fire("Cancelled", "Your testimony record is safe ", "error");
        }
  
      })
    }
  
  
  
//  editAccess(){
//   var retrievedObject:any = localStorage.getItem('user1');
//   var user1 = JSON.parse(retrievedObject);

//   return !user1.edit;
  
// }

// deleteAccess(){
//   var retrievedObject:any = localStorage.getItem('user1');
//   var user1 = JSON.parse(retrievedObject);

//   return !user1.delete;
// }
  
//   addAccess() {
//     var retrievedObject: any = localStorage.getItem('user1');
//     var user1 = JSON.parse(retrievedObject);
//   }





}
