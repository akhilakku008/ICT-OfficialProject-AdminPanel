
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {AdminServiceService} from '../admin-service.service'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent implements OnInit {
  public editor = ClassicEditor;


  course:any ={
    courseTitle: "",
    courseShortName: "",
    courseType: "", //to be added
    courseImage: "",
    courseAbout: "", // is same as LongDes
    courseAgenda: "",
    courseFee: "",
    EntranceExamDate : "",
    commencementDate : "",
    orientationDate : "",
    category : "",
    startDate : "",
    Objectives: "",
    courseRegFee : "",
    courseDuration : "",
    Reg_Status: 1,
    samplequestion : "",
    placementlist : "",
    // samplecertificate: String,
    internshipcertificate : "",
    shortDesc : "",
    // LongDes : "",
    // course_delivery : "",
    // internship_partner : "",
    // knowledge_partner : "",
    index: 0,
    active: true,
  }
   
  Active: boolean = true;
  inactive: boolean = true;

  isAlert=false;
  alertMsg="User updated Successfully";

  isAlert2=false;
  alertMsg1="Error Occured";

  selectedFile: any = null;

  fd = new FormData();


  constructor(private adminServe:AdminServiceService,private router:Router,private route:ActivatedRoute) { }

  editcourseForm=new FormGroup({
    title:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required]),
    short:new FormControl('',[Validators.required]),
    status: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    about:new FormControl('',[Validators.required]),
    entrance: new FormControl('', [Validators.required]),  
    commencement:new FormControl('',[Validators.required]),
    orientation: new FormControl('', [Validators.required]),  
    sdate:new FormControl('',[Validators.required]),
    fee: new FormControl('', [Validators.required]),  
    regfee:new FormControl('',[Validators.required]),
    duration: new FormControl('', [Validators.required]),
    agenda:new FormControl('',[Validators.required]),
    sample: new FormControl('', [Validators.required]),
    placement: new FormControl('', [Validators.required]),
    intern: new FormControl('', [Validators.required]),
    img: new FormControl('',[Validators.required]),
  })

  editCourse()
  {
   console.warn("bhg");
  }


  get title()
  {
    return this.editcourseForm.get('title');
  }
  get name()
  {
    return this.editcourseForm.get('name');
  }
  get type()
  {
    return this.editcourseForm.get('type');
  }
  get short()
  {
    return this.editcourseForm.get('short');
  }
  get status()
  {
    return this.editcourseForm.get('status');
  }
  get category()
  {
    return this.editcourseForm.get('category');
  }
  get about()
  {
    return this.editcourseForm.get('about');
  }


  get entrance()
  {
    return this.editcourseForm.get('entrance');
  }
  get commencement()
  {
    return this.editcourseForm.get('commencement');
  }
  get orientation()
  {
    return this.editcourseForm.get('orientation');
  }
  get sdate()
  {
    return this.editcourseForm.get('sdate');
  }
  get fee()
  {
    return this.editcourseForm.get('fee');
  }
  get regfee()
  {
    return this.editcourseForm.get('regfee');
  }
  get duration()
  {
    return this.editcourseForm.get('duration');
  }
  get agenda()
  {
    return this.editcourseForm.get('agenda');
  }
  get sample()
  {
    return this.editcourseForm.get('sample');
  }
  get placement()
  {
    return this.editcourseForm.get('placement');
  }
  get intern()
  {
    return this.editcourseForm.get('intern');
  }
  get img()
  {
    return this.editcourseForm.get('img');
  }



  ngOnInit(): void {

    let CourseId = localStorage.getItem("EditCourse");
    // console.log(CourseId)
    // this.imageModified = false;
    this.adminServe.getSingleCourse(CourseId)
      .subscribe((data) => {
        console.log(data)
        this.course = JSON.parse(JSON.stringify(data));
      });
  }






  UpdateCourse() {

    for (const prop in this.course)
    {
      this.fd.append(prop, this.course[prop]);
    }
    console.log("check", this.fd)
    
    this.adminServe.editCourse(this.fd)
    .subscribe(
      data => {
        console.log("get data to ts",data)
        if (data) {
          Swal.fire("Successfully Updated", "", "success")
            .then(() => {
              this.router.navigate(['../courses'], { relativeTo: this.route });
            })
        }
        else {
          Swal.fire("Network Error", "Please do after sometime ", "error")
            .then(() => {
              this.router.navigate(['../courses'], { relativeTo: this.route });
            })

        }
      });
  }

  //course image upload
  courseImage(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file', this.selectedFile, this.selectedFile.name);
  }
  
  courseDelivery(event: any){
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file2', this.selectedFile, this.selectedFile.name);
  }

  courseIntern(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file3', this.selectedFile, this.selectedFile.name);
  }
  courseKnowledge(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file4', this.selectedFile, this.selectedFile.name);
  }

 
}


