export interface clsStudList{
    course_id ?:number
    year_no?: number
    sno? :number 
    roll_no: string | null;
    stud_name: string | null;
    presentabsent?:boolean
    showflag?:boolean
    enableflag?:boolean
    showSaveMsg?:boolean
}


export interface ClsiAttendanceDtl {
  course_id: number;
  year_no: number;
}

export interface ClsoAttendanceDtl {
  sno: number;
  roll_no: string | null;
  stud_name: string | null;
}


export interface ClsoAttendance {
  error_code: string | null;
  error_desc: string | null;
  attDtl: ClsoAttendanceDtl[];
}
