import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 
import Swal from 'sweetalert2';
import {AdminServiceService} from '../admin-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  /*name of the excel-file which will be downloaded. */ 
fileName= 'ExcelSheet.xlsx';  

searchText:any;

cptmembership=[{
  Name:"qwert",
  Address:"qawszxdrfvghvhgvyugbhymokoptfrdc",
  Website:"tfrdrdrdfr.com",
  Head:"rdrtdhrf",
  Nature:"Asresdrfdesx",
  TypeOf:"TFTFtrf",
  IdNo:22,
  GST:3445,
  Date:"",
  ContactName:"fcgffd",
  Phone:12346878,
  Email:"htfdfcdd@gmail.com",
  TechSkill:"hvhgvgf",
  EmployeeCount:200,
  hire:"gvhgvg",
  Patent:"gvfgv",
  Collaborate:"hgfvgv",
  Details:"hgtrdtrt",
  AppliedDate:""
},
{
  Name:"uwert",
  Address:"zawszxdrfvghvhgvyugbhymokoptfrdc",
  Website:"mfrdrdrdfr.com",
  Head:"sdrtdhrf",
  Nature:"qsresdrfdesx",
  TypeOf:"cFTFtrf",
  IdNo:82,
  GST:9445,
  Date:"",
  ContactName:"mcgffd",
  Phone:92346878,
  Email:"utfdfcdd@mail.com",
  TechSkill:"avhgvgf",
  EmployeeCount:900,
  hire:"bvhgvg",
  Patent:"avfgv",
  Collaborate:"bgfvgv",
  Details:"qgtrdtrt",
  AppliedDate:2021-11-24
}
]

  constructor(private adminServ:AdminServiceService,private router:Router, private route: ActivatedRoute, public auth:AuthService) { }
  CorporateApplns:any;

  ngOnInit(): void {
    this.adminServ.getcorporate()
    .subscribe((applns)=>{
      this.CorporateApplns   = applns;
      console.log(applns)
      this.router.navigate(["corporate"])
    });
  }




  deletecorporate(corporate : any) {   
    Swal.fire({
     title: `Are you sure to delete the corporate member ${corporate.name}?`,
     confirmButtonColor: "#3085d6",
     confirmButtonText: "Yes, Delete it!",
     denyButtonText: "No, Cancel please!",
     showDenyButton: true,
     text: "You won't be able to revert this!",
     icon: 'warning',
     cancelButtonColor: '#d33',
   }).then((result) => {
     if (result.isConfirmed) {
       this.adminServ.deletecorporate(corporate)
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
                 this.router.navigate(['../corporate'], { relativeTo: this.route });
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
