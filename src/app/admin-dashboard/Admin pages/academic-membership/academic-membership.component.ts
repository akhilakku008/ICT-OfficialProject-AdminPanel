import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import {AdminServiceService} from '../admin-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-academic-membership',
  templateUrl: './academic-membership.component.html',
  styleUrls: ['./academic-membership.component.css']
})
export class AcademicMembershipComponent implements OnInit {

  fileName= 'ExcelSheet.xlsx'; 
  searchText: any;
  AcademicApplns : any;

  constructor(private adminServ:AdminServiceService,private router:Router, private route: ActivatedRoute,public auth:AuthService) { }

 


  ngOnInit(): void {
    this.adminServ.getacademic()
    .subscribe((applns)=>{
      this.AcademicApplns   = applns;
      console.log(applns)
      this.router.navigate(["academic"])
    });

  }


  deleteacademic(AcademicAppln : any) {   
    Swal.fire({
     title: `Are you sure to delete the academic member ${AcademicAppln.name}?`,
     confirmButtonColor: "#3085d6",
     confirmButtonText: "Yes, Delete it!",
     denyButtonText: "No, Cancel please!",
     showDenyButton: true,
     text: "You won't be able to revert this!",
     icon: 'warning',
     cancelButtonColor: '#d33',
   }).then((result) => {
     if (result.isConfirmed) {
       this.adminServ.deleteacademic(AcademicAppln)
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
                 this.router.navigate(['../academic'], { relativeTo: this.route });
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
    heroes = [
      { slno:1, memberid: 11, name: 'Mr. Nice', website: 'India' },
      { slno:2, memberid: 12, name: 'gggvg', website: 'mhhhh' },
      { slno:3, memberid: 13, name: 'hvxss', website: 'chine' },
      { slno:4, memberid: 15, name: 'qijh', website: 'hkoghh' },
      { slno:5, memberid: 16, name: 'mnhxds', website: 'zfffg' },
      { slno:6, memberid: 14, name: 'wsas', website: 'innnn' }
    ]
}
