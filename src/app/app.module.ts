import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HmpgComponent } from './hmpg/hmpg.component';
import { UloginComponent } from './ulogin/ulogin.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TeachersdashboardComponent } from './teachersdashboard/teachersdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HmpgComponent,
    UloginComponent,
    AttendanceComponent,
    TeachersdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
