import { Component, OnInit } from '@angular/core';
import { AnyObject } from 'chart.js/types/basic';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  
  tab : any = 'tab1';
  tab1 : any
  tab2 : any
  tab3: any
  
  step:any
  // Clicked : boolean
  
  login = false
  logout= true

  constructor() { }

  

  ngOnInit(): void {
    
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
