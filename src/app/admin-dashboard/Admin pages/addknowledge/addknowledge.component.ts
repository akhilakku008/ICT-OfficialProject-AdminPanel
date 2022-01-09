import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service'
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-addknowledge',
  templateUrl: './addknowledge.component.html',
  styleUrls: ['./addknowledge.component.css']
})
export class AddknowledgeComponent implements OnInit {

  knowledge: any = {
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

  addknowledge() {
    console.log("sdsd",this.fd)
     
    for (const prop in this.knowledge) {
      this.fd.append(prop, this.knowledge[prop]);
    }

    this.adminServ.addpatrons(this.fd).subscribe(
      response => {
        if (response) {
          Swal.fire("Successfully Added", "success")
            .then(() => {
              this.router.navigate(['../knowledge'], { relativeTo: this.route });
            })
        }
        else {
          Swal.fire("Network Error", "Please do after sometime ", "error")
            .then(() => {
              this.router.navigate(['../knowledge'], { relativeTo: this.route });
            })

        }
      })
 
  }

}
