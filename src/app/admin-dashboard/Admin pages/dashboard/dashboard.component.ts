import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import {AdminServiceService} from '../admin-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tab : any 
  tab1 : any
  tab2 : any
  tab3: any

  check = {
    course: "",
    registration: "",
    staff: "",
    testimony:""
   }

  check1: any
  check2: any
  check3: any
  check4:any

  step:any
  // Clicked : boolean
  


  constructor(private adminServ: AdminServiceService) {

    //!course Count
    
    this.adminServ.getCourses().subscribe((result) => {
      this.check1 = result
      this.check.course = this.check1.length;

      
    })

    // !Registration Count

    this.adminServ.getregistereduser().subscribe((result) => {
      this.check2 = result
      this.check.registration = this.check2.length;
    }) 
    
    // !Testimonials count
    this.adminServ.gettestimonials().subscribe((result) => {
      this.check3 = result
      this.check.testimony = this.check3.length;
    })

    // !Staff Count
    this.adminServ.getstaffs().subscribe((result) => {
      this.check4 = result
      this.check.staff = this.check4.length;
    })
    
   }


 checked:any = this.check

  ngOnInit(): void {
      // chart
    
    
    
      
      const data = {
        labels: [
          'Total Courses',
          ' Student registrations',
          'Total Admins',
          'total staffs'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [2, 1, 2,21],
          backgroundColor: [
           
            'rgb(255, 205, 86)',
            '#1ABC9C',
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)'
          ],
          hoverOffset: 4
        }]
      };
       
  
      Chart.register(...registerables);
      var myChart = new Chart("myChart", {
        type: 'doughnut',
        data: data,
        
      });
 
  
  }


  onClick(check:any){
    //    console.log(check);
        if(check==1){
          this.tab = 'tab1';
        }else if(check==2){
          this.tab = 'tab2';
        }else{
          this.tab = 'tab3';
        }    
      
    }

   onSwitch(check:any){
 
     switch (check) {
      case 1: 'tab1';
        return 
      case 2:'tab2';
        return 
      case 3: 'tab3';
        return 
    }

}

}
