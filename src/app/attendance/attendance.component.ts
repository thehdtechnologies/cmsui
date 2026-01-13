import {AfterViewInit, Component } from '@angular/core';
import { DomSanitizer, SafeHtml  } from '@angular/platform-browser';
import { GblsharedService } from '../gblshared.service';
import { ClsiAttendanceDtl, ClsoAttendance, clsStudList } from './attendanceModel';
import { Router } from '@angular/router';
import { AttendanceService } from './attendance.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { FormControl } from '@angular/forms';


declare var $: any;


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent  {

  
  // ngAfterViewInit(): void {
  //   $('[data-toggle="tooltip"]').tooltip();
  // }

  //searchControl = new FormControl('');
 

    hoveredRowIndex: number | null = null;

   public CourseName : string="";
   public CourseDesc : string="";
   public YearNoRoman : string="";
   public NoOfStud : number=0;
   public YearNo : number=0;
   public ClassSection : string =""; // for school only
   public searchText:string="";
   public SelectedDate:string="2025-01-06";
   public clearIcon:boolean=false;

   public sPresentCnt?:string="0";
   public iPresentCnt?:number=0;
   public sAbsentCnt?:string="0";
   public iAbsentCnt?:number=0;
   public showSeletAllSaveMsg?:boolean=false;

   data: ClsoAttendance | null = null;
   public InstituteType :string | undefined;



   public boolSelectAll :boolean=false; 
   
   public clsStud: Array<clsStudList> = new Array<clsStudList>();
   public filteredItems: Array<clsStudList> = new Array<clsStudList>();

 
   constructor(private sharedService: GblsharedService, private _httpservice : AttendanceService,
private router: Router, private sanitizer: DomSanitizer,
private http:HttpClient
   ) {
   this.sharedService.dispCourseName$.subscribe(name => { this.CourseName = name; });
   this.sharedService.dispCourseDesc$.subscribe(name => { this.CourseDesc = name; });
   this.sharedService.dispYearRoman$.subscribe(name => { this.YearNoRoman = name; });
   this.sharedService.dispNoOfStud$.subscribe(name => { this.NoOfStud = name; });
   this.sharedService.dispYearNo$.subscribe(name => { this.YearNo = name; });
   this.sharedService.dispClassSection$.subscribe(name => { this.ClassSection = name; });
   


   this.sharedService.dispInstituteType$.subscribe(name => { this.InstituteType = name; }); 

   
  }



  showDetails(index: number) {
    this.hoveredRowIndex = index;
  }

  hideDetails() {
    //this.hoveredRowIndex = null;
  }
  // Method to safely bind the HTML content
  // getSafeHtml(html: string): SafeHtml {
  //   return this.sanitizer.bypassSecurityTrustHtml(html);
  // }

  getSafeHtml(html?: string | null): SafeHtml {
    html = "<b>Roll No :</b> " + html
    return this.sanitizer.bypassSecurityTrustHtml(html??'');
  }

  
// getSafeHtml(html?: string | null): SafeHtml {
//   const input = html ?? '';
//   // Optionally sanitize to strip unsafe content before trusting
//   const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, input) ?? '';
//   return this.sanitizer.bypassSecurityTrustHtml(sanitized);
// }



  ngOnInit() {

    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {  
    // });

   /*
     this.clsStud.push({course_id: 1, year_no:1, sno:1 ,roll_no:'1',  stud_name: 'ABARNA S',presentabsent:false,showflag:true});
     this.clsStud.push({course_id: 1, year_no:1, sno:2 ,roll_no:'2',  stud_name: 'ABARNA M',presentabsent:false,showflag:true});
     this.clsStud.push({course_id: 1, year_no:1, sno:3 ,roll_no:'3',  stud_name: 'AJITHKUMAR M',presentabsent:false,showflag:true});
     this.clsStud.push({course_id: 1, year_no:1, sno:4 ,roll_no:'4',  stud_name: 'AKASH E',presentabsent:false,showflag:true});
     this.clsStud.push({course_id: 1, year_no:1, sno:5 ,roll_no:'5',  stud_name: 'BHOOMIKA K V',presentabsent:false,showflag:true});
     this.clsStud.push({course_id: 1, year_no:1, sno:6 ,roll_no:'6',  stud_name: 'CHANDRAPRIYAN G',presentabsent:false,showflag:true});
     this.clsStud.push({course_id: 1, year_no:1, sno:7 ,roll_no:'7',  stud_name: 'CHARUMATHI M',presentabsent:false,showflag:true});
     this.clsStud.push({course_id: 1, year_no:1, sno:8 ,roll_no:'8',  stud_name: 'CHITRA R',presentabsent:false,showflag:true});
     this.clsStud.push({course_id: 1, year_no:1, sno:9 ,roll_no:'9',  stud_name: 'DANIEL PAUL A',presentabsent:false,showflag:true});
     this.clsStud.push({course_id: 1, year_no:1, sno:10 ,roll_no:'10',  stud_name: 'DAYADHEEPAK V G',presentabsent:false,showflag:true});
    */




     if (this.InstituteType=="C") {
        
        //this.fnLoadCollegeStudents();  // LOADING FORM FILE FOR NOW 11/01/26

        this._httpservice.getJSONDataPharmDy1().subscribe(data => {      
        console.log("PHARMY1",data);
        this.clsStud = data;
        this.clsStud.forEach(x=>{
            x.showSaveMsg=false;
          })
          this.filteredItems = this.clsStud;
          this.iAbsentCnt = this.clsStud.length;
          this.sAbsentCnt = this.iAbsentCnt.toString();
      });
     }

    if (this.InstituteType=="S") { 
        
        //this.fnLoadSchoolStudents();  // LOADING FORM FILE FOR NOW 11/01/26

        this._httpservice.getJSONDataLkgA().subscribe(data => {      
        console.log("LKG A",data);
        this.clsStud = data;
        this.clsStud.forEach(x=>{
            x.showSaveMsg=false;
          })
          this.filteredItems = this.clsStud;
          this.iAbsentCnt = this.clsStud.length;
          this.sAbsentCnt = this.iAbsentCnt.toString();
      });
     }

    



    if (this.CourseName=="")
    {
      // looks like they are doing refresh in the app,\
      // so move to login page
      this.router.navigate(['/login']);
     
    }

    // this.searchControl.valueChanges
    // .pipe(debounceTime(300))
    // .subscribe(value => {
    //   this.filteredItems = this.clsStud.filter(item =>
    //     item.name.toLowerCase().includes(value.toLowerCase())
    //   );
    // });


  }
  fnLoadStudents__OLD()
  {
    

    const req: ClsiAttendanceDtl = { course_id: 6, year_no: 1 };
    this._httpservice.getAttendance(req).subscribe({      
        next: res => this.data = res,
        error: err => console.error(err)        
    }
    
  );
  
  }
      
    fnLoadCollegeStudents(): void {
    
      const req: ClsiAttendanceDtl = { course_id: 6, year_no: 1 };

      // Optional: log the request payload
      console.log('[fnLoadStudents] Request:', req);

      this._httpservice.getAttendance(req).subscribe({
        next: (res) => {
          console.log('[fnLoadStudents] Response:', res);  // <-- log to console
          this.data = res;
          this.clsStud = res.attDtl;
                
          this.clsStud.forEach(x=>{
            x.showSaveMsg=false;
          })
          this.filteredItems = this.clsStud;
          this.iAbsentCnt = this.clsStud.length;
          this.sAbsentCnt = this.iAbsentCnt.toString();

        },
        error: (err) => {
          console.error('[fnLoadStudents] Error:', err);
        },
        complete: () => {
          console.log('[fnLoadStudents] Completed');
        }
      });
    }




  fnClearSearch()
  {
    this.searchText="";
    this.filteredItems = this.clsStud;
  }
  fnSearchKeyup()
  {
    this.clearIcon=true;
    if (this.searchText !="") {

this.filteredItems=[];
       this.filteredItems = this.clsStud.filter(x =>
    x.stud_name
      ?.toLowerCase()
      .includes(this.searchText.toLowerCase())
  );
  
 
  }
  else 
  {
    this.filteredItems=[];
    this.filteredItems = this.clsStud;
  }

  }
  fnSelectAll() {
    if (this.boolSelectAll == false) {
      this.clsStud.forEach(ele => {
        ele.presentabsent = true;
      });

        this.iPresentCnt = this.clsStud.length;
        this.sPresentCnt = this.iPresentCnt.toString();

        this.iAbsentCnt = 0;
        this.sAbsentCnt = "0";

    }
    else {
      this.clsStud.forEach(ele => {
        ele.presentabsent = false;
      });

        this.iPresentCnt = 0;
        this.sPresentCnt = "0";

        this.iAbsentCnt = this.clsStud.length;
        this.sAbsentCnt = this.iAbsentCnt.toString();

    }

    this.showSeletAllSaveMsg=true;
     setTimeout(() => {
    this.showSeletAllSaveMsg= false;
  }, 1000); // hide after 1 sec



  }
  fnDateOnChange()
  {
    this.fnClearAndLoadData();
  }
  fnClearAndLoadData()
  {
    this.clsStud.forEach(x=>{
      x.presentabsent=false;
    });

    this.iAbsentCnt = this.clsStud.length;
    this.sAbsentCnt = this.iAbsentCnt.toString();

  }
  fnCheckboxClicked(itm:any)
  {

setTimeout(() => {
  if (itm.presentabsent==true)
    {
       // uncheck to check
      this.iAbsentCnt = (this.iAbsentCnt || 0) - 1;
      this.sAbsentCnt = this.iAbsentCnt.toString();

      this.iPresentCnt = (this.iPresentCnt || 0) + 1;
      this.sPresentCnt = this.iPresentCnt.toString();            
    }
    else 
    {
      // check to uncheck

      this.iAbsentCnt = (this.iAbsentCnt || 0) + 1;
      this.sAbsentCnt = this.iAbsentCnt.toString();

      this.iPresentCnt = (this.iPresentCnt || 0) - 1;
      this.sPresentCnt = this.iPresentCnt.toString();   
    }
  }, 100); // hide after 1 sec


   


    itm.showSaveMsg=true;

     setTimeout(() => {
    itm.showSaveMsg= false;
  }, 1000); // hide after 1 sec

  }
  fnLogout()
  {
 this.router.navigate(['/login']);
  }
  fnMoveToHomePage()
  {
    this.router.navigate(['/home']);
  }

   

}
