import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../admin-service.service'

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  
  eventItem: any

  constructor(private adminServ: AdminServiceService) { }

  ngOnInit(): void {
   
    let eventId = localStorage.getItem("EditEventID");
    this.adminServ.getevent(eventId).subscribe((data) => {
      console.log(data);
      this.eventItem = JSON.parse(JSON.stringify(data));
      // this.imgPrev    = this.eventItem.image;
    })

  }
}
