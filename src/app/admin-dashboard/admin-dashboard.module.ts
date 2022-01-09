import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardComponent } from './Admin pages/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SidenavbarComponent } from './Admin pages/sidenavbar/sidenavbar.component';
import { AddcourseComponent } from './Admin pages/addcourse/addcourse.component';
import { CoursesComponent } from './Admin pages/courses/courses.component';
import { EditCoursesComponent } from './Admin pages/edit-courses/edit-courses.component';
import { ViewCourseComponent } from './Admin pages/view-course/view-course.component';
import { AddAdminUserComponent } from './Admin pages/add-admin-user/add-admin-user.component';
import { EditAdminUserComponent } from './Admin pages/edit-admin-user/edit-admin-user.component';
import { AdminUserComponent } from './Admin pages/admin-user/admin-user.component';
import { AdminImgUploadComponent } from './Admin pages/admin-img-upload/admin-img-upload.component';
import { ViewAdminUserComponent } from './Admin pages/view-admin-user/view-admin-user.component';
import { AddEventsComponent } from './Admin pages/add-events/add-events.component';
import { EditEventsComponent } from './Admin pages/edit-events/edit-events.component';
import { ViewEventComponent } from './Admin pages/view-event/view-event.component';
import { EventsComponent } from './Admin pages/events/events.component';
import { AddNewsComponent } from './Admin pages/add-news/add-news.component';
import { AcademicMembershipComponent } from './Admin pages/academic-membership/academic-membership.component';
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
import { SearchCourseTitlePipe } from './Admin pages/search-course-title.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { TodosComponent } from './Admin pages/todos/todos.component';
import { HttpClientModule } from '@angular/common/http'
import { AdminServiceService } from './Admin pages/admin-service.service';
import { IndustrialComponent } from './Admin pages/industrial/industrial.component';
import { KnowledgepartnerComponent } from './Admin pages/knowledgepartner/knowledgepartner.component';
import { PatronComponent } from './Admin pages/patron/patron.component';
import { AddIndustryComponent } from './Admin pages/add-industry/add-industry.component';
import { AddPatronComponent } from './Admin pages/add-patron/add-patron.component';
import { AddknowledgeComponent } from './Admin pages/addknowledge/addknowledge.component';







@NgModule({
  declarations: [
    DashboardComponent,
    AdminLoginComponent,
    ChangePasswordComponent,
    SidenavbarComponent,
    AddcourseComponent,
    CoursesComponent,
    EditCoursesComponent,
    ViewCourseComponent,
    AddAdminUserComponent,
    EditAdminUserComponent,
    AdminUserComponent,
    AdminImgUploadComponent,
    ViewAdminUserComponent,
    AddEventsComponent,
    EditEventsComponent,
    ViewEventComponent,
    EventsComponent,
    AddNewsComponent,
    AcademicMembershipComponent,
    AddStaffComponent,
    StaffsComponent,
    EditStaffComponent,
    ViewStaffComponent,
    AddTestimonyComponent,
    TestimonyComponent,
    EditTestimonyComponent,
    ViewTestimonyComponent,
    RegisteredUsersComponent,
    PartnershipComponent,
    CorporateComponent,
    SearchCourseTitlePipe,
    TodosComponent,
    IndustrialComponent,
    KnowledgepartnerComponent,
    PatronComponent,
    AddIndustryComponent,
    AddPatronComponent,
    AddknowledgeComponent,

  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
    // CKEditorModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpClientModule,
    AngularEditorModule
  ],
  exports:[
    DashboardComponent,
    AdminLoginComponent,
    ChangePasswordComponent,
    
  ],
  providers: [
    AdminServiceService
  ]
})
export class AdminDashboardModule { }
