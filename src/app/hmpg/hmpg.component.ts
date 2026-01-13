import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GblsharedService } from '../gblshared.service';
import { clsCourseList } from './hmpgModel';


@Component({
  selector: 'app-hmpg',
  templateUrl: './hmpg.component.html',
  styleUrls: ['./hmpg.component.css']
})
export class HmpgComponent {

  public mpharmbg : string="#ff00000d";
  public pharmdbg:string="#007bff08";
  public bpharmbg:string="#dedede3d";
  
  public InstituteType :string | undefined;

  public clsCourse: clsCourseList[] = [];
  
  constructor (private router: Router, private sharedService: GblsharedService ) {
 this.sharedService.dispInstituteType$.subscribe(name => { this.InstituteType = name; });    
  }

  ngOnInit() {
    
    if (this.InstituteType=="C") {
    this.clsCourse.push({course_id: 1,  course_name: 'PHARM D', course_desc: '6 Years Integrated PG Course', year_no:1, year_no_roman:'I', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'PHARM D', course_desc: '6 Years Integrated PG Course', year_no:2, year_no_roman:'II',total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'PHARM D', course_desc: '6 Years Integrated PG Course', year_no:3, year_no_roman:'III', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'PHARM D', course_desc: '6 Years Integrated PG Course', year_no:4, year_no_roman:'IV', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'PHARM D', course_desc: '6 Years Integrated PG Course', year_no:5, year_no_roman:'V', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'PHARM D', course_desc: '6 Years Integrated PG Course', year_no:6, year_no_roman:'VI', total_strength:20});

    this.clsCourse.push({course_id: 2,  course_name: 'M.PHARM', course_desc: '2 Years PG Course', year_no:1, year_no_roman:'I',  total_strength:20});
    this.clsCourse.push({course_id: 2,  course_name: 'M.PHARM', course_desc: '2 Years PG Course', year_no:2,  year_no_roman:'II',   total_strength:20});

    this.clsCourse.push({course_id: 3,  course_name: 'B.PHARM', course_desc: '4 Years Degree Course', year_no:1, year_no_roman:'I', total_strength:20});
    this.clsCourse.push({course_id: 3,  course_name: 'B.PHARM', course_desc: '4 Years Degree Course', year_no:2, year_no_roman:'II',total_strength:20});
    this.clsCourse.push({course_id: 3,  course_name: 'B.PHARM', course_desc: '4 Years Degree Course', year_no:3, year_no_roman:'III', total_strength:20});
    this.clsCourse.push({course_id: 3,  course_name: 'B.PHARM', course_desc: '4 Years Degree Course', year_no:4, year_no_roman:'IV', total_strength:20});
    }
    if (this.InstituteType=="S")
    {
    this.clsCourse.push({course_id: 1,  course_name: 'LKG', course_desc: 'LKG A SECTION', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'UKG', course_desc: 'UKG A SECTION', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class I', course_desc: 'Class I', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class II', course_desc: 'Class II', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class III', course_desc: 'Class III', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class IV', course_desc: 'Class VI', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class V', course_desc: 'Class V', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class VI', course_desc: 'Class VI', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class VII', course_desc: 'Class VII', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class VIII', course_desc: 'Class VIII', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class XI', course_desc: 'Class XI', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class X', course_desc: 'Class X', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class XI', course_desc: 'Class XI', year_no:1, section:'A', total_strength:20});
    this.clsCourse.push({course_id: 1,  course_name: 'Class XII', course_desc: 'Class XII', year_no:1, section:'A', total_strength:20});


    }
   

    console.log(this.clsCourse);
  }


  fnLogout()
  {
    this.router.navigate(['/login']);
  }

  fnGoToAttendance(tmpcls:any)
  {
    console.log("Selected Course", tmpcls);
    this.sharedService.setCourseName(tmpcls.course_name);
    this.sharedService.setCourseDesc(tmpcls.course_desc);
    this.sharedService.setYearRoman(tmpcls.year_no_roman);
    this.sharedService.setNoOfStud(tmpcls.total_strength);
    this.sharedService.setYearNo(tmpcls.year_no);
    this.sharedService.setClassSection(tmpcls.section);
    window.scrollTo(0, 0);
    this.router.navigate(['/studattendance']);
  }
}


