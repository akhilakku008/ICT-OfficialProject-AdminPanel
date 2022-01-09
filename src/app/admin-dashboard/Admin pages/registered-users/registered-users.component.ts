import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import {AdminServiceService} from '../admin-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

 
  	
/*name of the excel-file which will be downloaded. */ 
fileName= 'ExcelSheet.xlsx';  
searchText:any;
  RegsiteredUsers: any;
  
// RegsiteredUsers=[{
//   Course:"",
//   Email:"",
//   Name:"",
//   Phone:"",
//   Employed:"",
//   RegisterdDate:"",
//   Message:"",
// }]
  
  // Date range
  range = new FormGroup({
  start: new FormControl(),
  end: new FormControl()
});
  
  constructor(private adminServ:AdminServiceService,private router:Router, private route: ActivatedRoute,public auth:AuthService) { }

  ngOnInit(): void {
      
    this.adminServ.getregistereduser()
    .subscribe((data)=>{
      this.RegsiteredUsers   = data;
      console.log(data)
      this.router.navigate(["registered-users"])
    });

  }

  deleteuser(RegsiteredUser : any) {   
    Swal.fire({
     title: `Are you sure to delete the corporate member ${RegsiteredUser.name}?`,
     confirmButtonColor: "#3085d6",
     confirmButtonText: "Yes, Delete it!",
     denyButtonText: "No, Cancel please!",
     showDenyButton: true,
     text: "You won't be able to revert this!",
     icon: 'warning',
     cancelButtonColor: '#d33',
   }).then((result) => {
     if (result) {
       this.adminServ.deleteuser(RegsiteredUser)
         .subscribe(
           response => {
             if (response.isConfirmed) {
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
                 this.router.navigate(['../registered-users'], { relativeTo: this.route });
               })
 
             }
           }
 
         )
 
     } else {
       Swal.fire("Cancelled", "Your course record is safe ", "error");
     }
 
   })
 }






  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

}
