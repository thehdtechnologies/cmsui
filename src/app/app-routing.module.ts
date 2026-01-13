import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HmpgComponent } from './hmpg/hmpg.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TeachersdashboardComponent } from './teachersdashboard/teachersdashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'home', component: HmpgComponent },
  {path:'login',component: UloginComponent},
  {path:'studattendance',component:AttendanceComponent},
  {path:'teachersdashboard',component:TeachersdashboardComponent}

];

@NgModule({
  imports: [
     //       RouterModule.forRoot(routes)
          RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
