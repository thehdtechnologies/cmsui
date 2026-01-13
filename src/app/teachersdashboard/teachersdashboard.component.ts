import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GblsharedService } from '../gblshared.service';

@Component({
  selector: 'app-teachersdashboard',
  templateUrl: './teachersdashboard.component.html',
  styleUrls: ['./teachersdashboard.component.css']
})
export class TeachersdashboardComponent {

   constructor(private sharedService: GblsharedService,
  private router: Router,
  
     ) {}
  fnLogout()
  {
 this.router.navigate(['/login']);
  }
  fnMoveToHomePage()
  {
    this.router.navigate(['/home']);
  }

}

