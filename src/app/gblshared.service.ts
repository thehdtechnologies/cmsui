import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GblsharedService {

  private CourseName = new BehaviorSubject<string>('');  
  private CourseDesc = new BehaviorSubject<string>('');  
  private YearNoRoman = new BehaviorSubject<string>('');
  private NoOfStud = new BehaviorSubject<number>(0);
  private YearNo = new BehaviorSubject<number>(0);
  private ClassSection = new BehaviorSubject<string>('');  
  private InstituteType = new BehaviorSubject<string>('');
  

  dispCourseName$ = this.CourseName.asObservable();
  setCourseName(name: string) {
    this.CourseName.next(name);
  }

  dispCourseDesc$ = this.CourseDesc.asObservable();
  setCourseDesc(name: string) {
    this.CourseDesc.next(name);
  }

  dispYearRoman$ = this.YearNoRoman.asObservable();
  setYearRoman(name: string) {
    this.YearNoRoman.next(name);
  }

  dispNoOfStud$ = this.NoOfStud.asObservable();
  setNoOfStud(name:number) {
    this.NoOfStud.next(name);
  }

  dispYearNo$ = this.YearNo.asObservable();
  setYearNo(name:number) {
    this.YearNo.next(name);
  }
  
  dispInstituteType$ = this.InstituteType.asObservable();
  setInstituteType(name: string) {
      this.InstituteType.next(name);
  }

  dispClassSection$ = this.ClassSection.asObservable();
  setClassSection(name: string) {
      this.ClassSection.next(name);
  }

  

  constructor() { }
}
