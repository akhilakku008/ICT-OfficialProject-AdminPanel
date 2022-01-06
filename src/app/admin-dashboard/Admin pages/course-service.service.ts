import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

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
    return this.http.post(`${this.server_address}/course/Course/insert`, course);
  }

  deleteCourse(Course: any) {
    return this.http.post(`${this.server_address}/course/Course/remove`, Course);
  }
    
}
