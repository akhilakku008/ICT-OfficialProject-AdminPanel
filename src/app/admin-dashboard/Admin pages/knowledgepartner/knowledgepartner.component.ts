import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import {AdminServiceService} from '../admin-service.service'
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-knowledgepartner',
  templateUrl: './knowledgepartner.component.html',
  styleUrls: ['./knowledgepartner.component.css']
})
export class KnowledgepartnerComponent implements OnInit {
  searchText: any  
  query: any
  
  knowledge:any


  constructor(public auth:AuthService,private adminServ:AdminServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.adminServ.ViewKnowledge().subscribe((data)=> {
      console.log("data",data)
      this.knowledge = data
    })
  }


  Deleteknow(know:any) {
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
        this.adminServ.RemoveKnowledge(know)
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
                  this.router.navigate(['../knowledge'], { relativeTo: this.route });
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
