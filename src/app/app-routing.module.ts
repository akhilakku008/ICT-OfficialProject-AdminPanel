import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminAuthGuard} from './admin-dashboard/admin-auth.guard'
import { AdminLoginComponent } from './admin-dashboard/admin-login/admin-login.component';

const routes: Routes = [

  {
    path: 'LandingPage',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: '',
    redirectTo: 'LandingPage',
    pathMatch: 'full'
  },
  {
    path:'adminpage',canActivate: [AdminAuthGuard],
    loadChildren:() => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  {
    path:'adminpage',
    redirectTo:'adminpage',
    pathMatch:'full'
  },
  { path: 'login', component: AdminLoginComponent },
  {path:'',component:AdminLoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
