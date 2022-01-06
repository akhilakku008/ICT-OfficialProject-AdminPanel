import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }
  
  server_address: string = "http://localhost:3000"
  
  getCourses() {
    return this.http.get<any>(`${this.server_address}/coursedata`);
  };
   
  getCourseRegistrationAggr() {
    return this.http.get(`${this.server_address}/registration/registercourseAggr`)
  };

  session_out() {
    this.http.get(`${this.server_address}/logout`)
  };

  getCourseRegistrationList() {
    return this.http.get(`${this.server_address}/registration/registercourseList`)
  };

  getSingleCourse(id: any) {
    return this.http.get(`${this.server_address}/coursedata/courseSingle/` +id);
  };

  // updateCourseIndex(course: any) {
  //   return this.http.put(`${this.server_address}/course/Course/updateIndex`, course);
  // };

  editCourse(Course: any) {

    console.log("data arrived at service",Course)
    return this.http.post<any>(`${this.server_address}/coursedata/Course/update`, Course);

  };

  newCourse(course: any) {
    return this.http.post(`${this.server_address}/coursedata/Course/add`, course);
  }

  deleteCourse(id: any) {
    console.log("id getting",id._id)
    return this.http.post<any>(`${this.server_address}/coursedata/Course/remove`,id);
  }
  

//!Testimonials
  
  
gettestimonial(id: any) {
  return this.http.get(`${this.server_address}/CourseTestimony/courseTestimony/` + id);
}


gettestimonials() {
  return this.http.get(`${this.server_address}/CourseTestimony`);
}

updateTestimonialIndex(testimonial: any) {
  return this.http.put(`${this.server_address}/testimonials/Testimonials/updateIndex`, testimonial);
};


newTestimonial(item: any) {

  return this.http.post(`${this.server_address}/CourseTestimony/courseTestimony/add`,item)
}


deletetestimonial(testi: any) {
  return this.http.post(`${this.server_address}/CourseTestimony/courseTestimony/remove`, testi);
}


editTestimonial(item: any) {
  return this.http.post(`${this.server_address}/CourseTestimony/testimonial/update`, item)
};

//!Events

getevent(id: any) {
  return this.http.get(`${this.server_address}/eventsadmin//singleevent/` +id);
}

newEvent(item: any) {

  return this.http.post(`${this.server_address}/eventsadmin/add`, item)
}

getevents() {
  return this.http.get(`${this.server_address}/events`);
}

  deleteevent(id: any) {
  console.log("delete service",id._id)
  return this.http.post(`${this.server_address}/eventsadmin/events/remove`,id);
}

  editEvent(item: any) {
  console.log("editevent starts")
  return this.http.post(`${this.server_address}/eventsadmin/event/update`, item)
}
  

updateEventIndex(event: any) {
  return this.http.put(`${this.server_address}/events/event/updateIndex`, event);
};

  //!admin backend calls

  newAdminUser(item:any){
    console.log(item);
    return this.http.post(`${this.server_address}/signup`,item);
  }

  deleteAdmin(item:any){
    return this.http.post(`${this.server_address}/signup/signup/remove`,item);
  }

  getAdminUsers(){
    return this.http.get(`${this.server_address}/signup/AdminList`);
  }

  getAdminUser(id:any){
    return this.http.get(`${this.server_address}/signup/admindata/`+id);
  }
  editAdminUser(item: any) {
    console.log("item found at editadmin",item)
    return this.http.post(`${this.server_address}/signup/signup/update`,item)
  }

  

  // !staff backend calls
  getstaff(id: any) {
    return this.http.get(`${this.server_address}/staffadmin/staffdata/` + id);
  }

  //all staff data 
  getstaffs() {
    return this.http.get(`${this.server_address}/staff`);
  }

  updateStaffIndex(staff: any) {
    console.log(staff);
    return this.http.put(`${this.server_address}/staffMenu/Staffs/updateIndex`, staff);
  };


  newStaff( item: any) {
    console.log('inside service upload')
    return this.http.post(`${this.server_address}/staffadmin/insert`, item);
  }

  deletestaff(staff: any) {
    return this.http.post<any>(`${this.server_address}/staffadmin/remove/`,staff);
  }

  editStaff(item: any) {
    console.log("editstaff success")
    return this.http.post<any>(`${this.server_address}/staffadmin/update`, item)
  };
  
  
// Academics
// academic list

getacademic() {
  return this.http.get(`${this.server_address}/academic`);
};
// delete academic
deleteacademic(AcademicAppln : any){
  return this.http.post(`${this.server_address}/academicadmin/remove`,AcademicAppln);
}


// corporate membership
// corporate list
getcorporate() {
  return this.http.get(`${this.server_address}/CorporateApplication/data`);
};
deletecorporate(corporate:any) {
  return this.http.post(`${this.server_address}/CorporateApplication/remove`,corporate);
};

// partnership
getpartnership() {
  return this.http.get(`${this.server_address}/PartnershipApplication`);
};
// delete partnership member
deletepartner(partnerAppl:any){
  return this.http.post(`${this.server_address}/PartnershipApplication/remove`,partnerAppl);
}

// course registered users
getregistereduser() {
  return this.http.get(`${this.server_address}/registration/registercourseList`);
};
// delete registered user
deleteuser(data:any){
  return this.http.post<any>(`${this.server_address}/registration/remove/`,data);
}




    
}





