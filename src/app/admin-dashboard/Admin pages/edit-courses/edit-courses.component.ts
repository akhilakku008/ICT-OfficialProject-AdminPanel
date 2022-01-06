
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
    courseTitle            : '',
    courseImage            : '',
    shortDesc              : '',
    LongDes                 : '',
    Reg_Status              : 1 ,
    Objectives              : '',
    category                : '',
    Rating                  : '',
    about_course            : '',
    dates                   : '' ,
    eligibility             : '',
    course_fee              : '',
    aptitude_test           : '',
    course_delivery         : '',
    internship_partner      : '',
    knowledge_partner       : '',
    index                   : 0,
    active                  : true 
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
    describe:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
    rate:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    about:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    eligible:new FormControl('',[Validators.required]),
    fee:new FormControl('',[Validators.required]),
    entrance:new FormControl('',[Validators.required]),
    refund:new FormControl('',[Validators.required]),
    img:new FormControl('',[Validators.required]),
    delivery:new FormControl('',[Validators.required]),
    intern:new FormControl('',[Validators.required]),
    knowledge:new FormControl('',[Validators.required]),
    sponsour:new FormControl('',[Validators.required]),
   
  })

  editCourse()
  {
   console.warn("bhg");
  }


  get title()
  {
    return this.editcourseForm.get('title');
  }
  get describe()
  {
    return this.editcourseForm.get('describe');
  }
  get status()
  {
    return this.editcourseForm.get('status');
  }
  get rate()
  {
    return this.editcourseForm.get('rate');
  }
  get category()
  {
    return this.editcourseForm.get('category');
  }
  get about()
  {
    return this.editcourseForm.get('about');
  }
  get date()
  {
    return this.editcourseForm.get('date');
  }
  get eligible()
  {
    return this.editcourseForm.get('eligible');
  }
  get fee()
  {
    return this.editcourseForm.get('fee');
  }
  get entrance()
  {
    return this.editcourseForm.get('entrance');
  }
  get refund()
  {
    return this.editcourseForm.get('refund');
  }
  get img()
  {
    return this.editcourseForm.get('img');
  }
  get delivery()
  {
    return this.editcourseForm.get('delivery');
  }
  get intern()
  {
    return this.editcourseForm.get('intern');
  }
  get knowledge()
  {
    return this.editcourseForm.get('knowledge');
  }
  get sponsour()
  {
    return this.editcourseForm.get('sponsour');
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



  //course image upload
  courseImage(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('file1', this.selectedFile, this.selectedFile.name);
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



  UpdateCourse() {

    for (const prop in this.course)
    {
      this.fd.append(prop, this.course[prop]);
    }
    console.log("check", this.fd)
    
    this.adminServe.editCourse(this.course)
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


 
}


