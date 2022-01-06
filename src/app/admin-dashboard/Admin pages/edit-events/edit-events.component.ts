import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {AdminServiceService} from '../admin-service.service'

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {
    
  EventItem = {
    coursename: "",
    regstatus: "",
    fees: "",
    agenda: "",
    objectives: "",
    startdate: "",       
    enddate: '',
    image: "",
    creation_date:Date
  }

  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";

  selectedFile: any = null;
  fd = new FormData();


  constructor(private adminServ:AdminServiceService,private router:Router,private route:ActivatedRoute) { }

  createFormData(event:any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('image', this.selectedFile, this.selectedFile.name);
   }

  AddeventForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    describe:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
    rate:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    about:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    coordinator:new FormControl('',[Validators.required]),
    event:new FormControl('',[Validators.required]),
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
  get describe()
  {
    return this.AddeventForm.get('describe');
  }
 
  get about()
  {
    return this.AddeventForm.get('about');
  }
  get date()
  {
    return this.AddeventForm.get('date');
  }
  get coordinator()
  {
    return this.AddeventForm.get('coordinator');
  }
  get event()
  {
    return this.AddeventForm.get('event');
  }
  get img()
  {
    return this.AddeventForm.get('img');
  }
 


  ngOnInit(): void {
   
    let eventId = localStorage.getItem("EditEvent");
    this.adminServ.getevent(eventId).subscribe((data) => {
      this.EventItem = JSON.parse(JSON.stringify(data));
      // this.imgPrev = this.eventItem.image;
      // this.ifActive = true;

    })
    
  }
  editevent() {
  console.log("data arrived at edit fn")     
    this.adminServ.editEvent(this.EventItem)
      .subscribe(
        response => {
          if (response) {
            Swal.fire("Successfully Updated", "", "success")
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
        });
  }
}
