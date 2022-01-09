import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Admin pages/dashboard/dashboard.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
// import { SidenavbarComponent } from './Admin pages/sidenavbar/sidenavbar.component';
import { AddcourseComponent } from './Admin pages/addcourse/addcourse.component';
import { CoursesComponent } from './Admin pages/courses/courses.component';
import { EditCoursesComponent } from './Admin pages/edit-courses/edit-courses.component';
import { ViewCourseComponent } from './Admin pages/view-course/view-course.component';
import { AddAdminUserComponent } from './Admin pages/add-admin-user/add-admin-user.component';
import { EditAdminUserComponent } from './Admin pages/edit-admin-user/edit-admin-user.component';
import { AdminUserComponent } from './Admin pages/admin-user/admin-user.component';
import { AdminImgUploadComponent } from './Admin pages/admin-img-upload/admin-img-upload.component';
import { AddEventsComponent } from './Admin pages/add-events/add-events.component';
import { EditEventsComponent } from './Admin pages/edit-events/edit-events.component';
import { ViewEventComponent } from './Admin pages/view-event/view-event.component';
import { EventsComponent } from './Admin pages/events/events.component';
import { AddNewsComponent } from './Admin pages/add-news/add-news.component';
import { AcademicMembershipComponent } from './Admin pages/academic-membership/academic-membership.component';
import { ViewAdminUserComponent } from './Admin pages/view-admin-user/view-admin-user.component';
import { AddStaffComponent } from './Admin pages/add-staff/add-staff.component';
import { StaffsComponent } from './Admin pages/staffs/staffs.component';
import { EditStaffComponent } from './Admin pages/edit-staff/edit-staff.component';
import { ViewStaffComponent } from './Admin pages/view-staff/view-staff.component';
import { AddTestimonyComponent } from './Admin pages/add-testimony/add-testimony.component';
import { TestimonyComponent } from './Admin pages/testimony/testimony.component';
import { EditTestimonyComponent } from './Admin pages/edit-testimony/edit-testimony.component';
import { ViewTestimonyComponent } from './Admin pages/view-testimony/view-testimony.component';
import { RegisteredUsersComponent } from './Admin pages/registered-users/registered-users.component';
import { PartnershipComponent } from './Admin pages/partnership/partnership.component';
import { CorporateComponent } from './Admin pages/corporate/corporate.component';
import { IndustrialComponent } from './Admin pages/industrial/industrial.component';
import { KnowledgepartnerComponent } from './Admin pages/knowledgepartner/knowledgepartner.component';
import { PatronComponent } from './Admin pages/patron/patron.component';
import { AddIndustryComponent } from './Admin pages/add-industry/add-industry.component';
import { AddPatronComponent } from './Admin pages/add-patron/add-patron.component';
import { AddknowledgeComponent } from './Admin pages/addknowledge/addknowledge.component';


const routes: Routes = [

      {
        path:'',
       component:DashboardComponent
         },
         {
           path:'login',
           component:AdminLoginComponent
         },
         {
           path:'reset',
           component:ChangePasswordComponent
         },
         {
           path:'courses',
           component:CoursesComponent
  },
  {
    path: 'industrial',
    component:IndustrialComponent
  },
  {
    path: 'industryAdd',
    component:AddIndustryComponent
  },

  {
    path: 'knowledge',
    component:KnowledgepartnerComponent
  },
  {
    path: 'addknowledge',
  component:AddknowledgeComponent},
  {
    path: 'patrons',
    component: PatronComponent
  },
 {path:"addpatron",component:AddPatronComponent},
         {
           path:'addcourses',
           component:AddcourseComponent
         },
         {
           path:'edit-courses',
           component:EditCoursesComponent
         },
         {
           path:'view-course',
           component:ViewCourseComponent
         },
         {
           path:'add-admin-user',
           component:AddAdminUserComponent
         },
         {
           path:'edit-admin-user',
           component:EditAdminUserComponent
         },
         {
           path:'admin-user',
           component:AdminUserComponent
         },
         {
           path:'admin-img-upload',
           component:AdminImgUploadComponent
         },
         {
           path:'add-events',
           component:AddEventsComponent
         },
         {
           path:'edit-event',
           component:EditEventsComponent
         },
         {
           path:'view-event',
           component:ViewEventComponent
         },
         {
           path:'events',
           component:EventsComponent
         },
         {
           path:'add-news',
           component:AddNewsComponent
         },
         {
           path:'academic',
           component:AcademicMembershipComponent
         },
         {
           path:'view-user',
           component:ViewAdminUserComponent
         },
         {
           path:'add-staffs',
           component:AddStaffComponent
         },
         {
           path:'staffs',
           component:StaffsComponent
         },
         {
           path:'edit-staffs',
           component:EditStaffComponent
         },
         {
           path:'view-staff',
           component:ViewStaffComponent
         },
         {
           path:'add-testimony',
           component:AddTestimonyComponent
         },
         {
           path:'testimony',
           component:TestimonyComponent
         },
         {
          path:'edit-testimony',
          component:EditTestimonyComponent
        },
        {
          path:'view-testimony',
          component:ViewTestimonyComponent
        },
        {
          path:'registered-users',
          component:RegisteredUsersComponent
        },
        {
          path:'partnership',
          component:PartnershipComponent
        },
        {
          path:'corporate',
          component:CorporateComponent
        }

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
