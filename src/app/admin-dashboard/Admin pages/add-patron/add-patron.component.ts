import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service'
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-patron',
  templateUrl: './add-patron.component.html',
  styleUrls: ['./add-patron.component.css']
})
export class AddPatronComponent implements OnInit {
  industry: any = {
    image: ''
  }
  selectedFile: any = null;
  fd = new FormData();

  formData: any = {};
  


  constructor(private adminServ: AdminServiceService, private router: Router, private route: ActivatedRoute) { }
  
  AddcourseForm=new FormGroup({
    img: new FormControl('',[Validators.required]),
  })

  addCourse()
  {
   console.warn("bhg");
  }
  get img()
  {
    return this.AddcourseForm.get('img');
  }



  ngOnInit(): void {
  }


  
  createFormData(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
  }

  addpatron() {
    console.log("sdsd",this.fd)
     
    for (const prop in this.industry) {
      this.fd.append(prop, this.industry[prop]);
    }

    this.adminServ.addpatrons(this.fd).subscribe(
      response => {
        if (response) {
          Swal.fire("Successfully Added", "success")
            .then(() => {
              this.router.navigate(['../patrons'], { relativeTo: this.route });
            })
        }
        else {
          Swal.fire("Network Error", "Please do after sometime ", "error")
            .then(() => {
              this.router.navigate(['../patrons'], { relativeTo: this.route });
            })

        }
      })
 
  }
}
