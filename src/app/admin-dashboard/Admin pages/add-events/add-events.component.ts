import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {AdminServiceService} from '../admin-service.service'

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {


  eventDetails:any = {
    coursename: "",
    eventname: "",
    eventtype: "",
    eventabout: "",
    eventobjective: "",
    eventoverview: "",
    eventagenda: "",
    eventtraining: "",
    eventfees: "",
    lastDateReg: "",  
      startdate: "",       
      enddate: "",
      image: "",
    regstatus:"",
    creation_date: ""
  }

  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";

  selectedFile: any = null;
  fd = new FormData();


  constructor(private adminServ:AdminServiceService,private router:Router,private route:ActivatedRoute) { }
   
  

  AddeventForm=new FormGroup({
    name: new FormControl('', [Validators.required]),
    corname: new FormControl('', [Validators.required]),
    about: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    oveview: new FormControl('', [Validators.required]),
    agenda: new FormControl('', [Validators.required]),
    trainining: new FormControl('', [Validators.required]),
    fee: new FormControl('', [Validators.required]),
    lastDate: new FormControl('', [Validators.required]),
    obj: new FormControl('', [Validators.required]),
    startdat: new FormControl('', [Validators.required]),
    enddat: new FormControl('', [Validators.required]),
    img:new FormControl('',[Validators.required]),
    
   
  })

  addevent()
  {
   console.warn("bhg");
  }


  get name()
  {
    return this.AddeventForm.get('name');
  }
  get corname()
  {
    return this.AddeventForm.get('corname');
  }
 
  get type()
  {
    return this.AddeventForm.get('type');
  }
  get oveview()
  {
    return this.AddeventForm.get('oveview');
  }
  get agenda()
  {
    return this.AddeventForm.get('agenda');
  }
  get trainining()
  {
    return this.AddeventForm.get('trainining');
  }
  get fee()
  {
    return this.AddeventForm.get('fee');
  }
  get lastDate()
  {
    return this.AddeventForm.get('lastDate');
  }
  get obj()
  {
    return this.AddeventForm.get('obj');
  }
  get startdat()
  {
    return this.AddeventForm.get('startdat');
  }
  get enddat()
  {
    return this.AddeventForm.get('enddat');
  }
  get about()
  {
    return this.AddeventForm.get('about');
  }
  get img()
  {
    return this.AddeventForm.get('img');
  }
 

  ngOnInit(): void {
  }

  createFormData(event:any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
   }


  addEvent() {

    for (const prop in this.eventDetails)
    {
      this.fd.append(prop, this.eventDetails[prop]);
    }
  
    this.adminServ.newEvent( this.fd).subscribe(
      response => {
        console.log(response);
        if (response) {
          Swal.fire("Successfully Added", "success")
            .then(() => {
              this.router.navigate(['../events'], { relativeTo: this.route });
            })
        }
        else {
          Swal.fire("Network Error", "Please do after sometime ", "error")
            .then(() => {
              this.router.navigate(['../events'], { relativeTo: this.route });
            })

        }
      })
  }


}
