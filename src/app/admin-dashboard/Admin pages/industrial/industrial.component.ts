import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import {AdminServiceService} from '../admin-service.service'
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-industrial',
  templateUrl: './industrial.component.html',
  styleUrls: ['./industrial.component.css']
})
export class IndustrialComponent implements OnInit {
  searchText: any  
  query: any
  
  industry:any

  constructor(public auth:AuthService,private adminServ:AdminServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
     
    this.adminServ.ViewIndustry().subscribe((data) => {
      console.log("data",data)
      this.industry = data
    })

  }


 DeleteIndus(indus:any) {
  Swal.fire({
    title: `Are you sure to delete the image?`,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Yes, Delete it!",
    denyButtonText: "No, Cancel please!",
    showDenyButton: true,
    text: "You won't be able to revert this!",
    icon: 'warning',
    cancelButtonColor: '#d33',
  }).then((result) => {
    if (result.isConfirmed) {
      this.adminServ.RemoveIndus(indus)
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
                this.router.navigate(['../industrial'], { relativeTo: this.route });
              })

            }
          }

        )

    } else {
      Swal.fire("Cancelled", "Your course record is safe ", "error");
    }

  })
  
  }

}
