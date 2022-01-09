import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 
import Swal from 'sweetalert2';
import {AdminServiceService} from '../admin-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
export class PartnershipComponent implements OnInit {

  /*name of the excel-file which will be downloaded. */ 
fileName= 'ExcelSheet.xlsx';  
searchText:any;

partnerAppls:any;
  constructor(private adminServ:AdminServiceService,private router:Router, private route: ActivatedRoute,public auth:AuthService) { }

  ngOnInit(): void {
    this.adminServ.getcorporate()
    .subscribe((applns)=>{
      this.partnerAppls   = applns;
      console.log(applns)
      this.router.navigate(["partnership"])
    });
  }





  
  deletepartner(partnerAppl : any) {   
    Swal.fire({
     title: `Are you sure to delete the corporate member ${partnerAppl.name}?`,
     confirmButtonColor: "#3085d6",
     confirmButtonText: "Yes, Delete it!",
     denyButtonText: "No, Cancel please!",
     showDenyButton: true,
     text: "You won't be able to revert this!",
     icon: 'warning',
     cancelButtonColor: '#d33',
   }).then((result) => {
     if (result.isConfirmed) {
       this.adminServ.deletepartner(partnerAppl)
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
                 this.router.navigate(['../partnership'], { relativeTo: this.route });
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
