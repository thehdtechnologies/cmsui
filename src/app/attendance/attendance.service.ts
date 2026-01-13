import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { ClsiAttendanceDtl, ClsoAttendance } from '../attendance/attendanceModel'



@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  //private baseUrl = '${environment.apiBaseUrl}/api/attendance';
  
  private baseUrl = 'http://localhost:5142/api/grdApi/fnGetAttendanceDtl/';

  constructor(private http: HttpClient) { }
  
  getAttendance(body: ClsiAttendanceDtl): Observable<ClsoAttendance> {
    
 //return this.http.post<ClsoAttendance>('${this.baseUrl}/api/grdApi/fnGetAttendanceDtl', body)
 
return this.http
      .post<ClsoAttendance>(this.baseUrl, body /*, { headers }*/)
      .pipe(catchError(this.handleError));

      

  }

    getJSONDataPharmDy1(): Observable<any> {
    // Use the relative path from the app root, the assets folder is mapped automatically
    return this.http.get('./assets/jsontestdata/pharmdy1.json');
  }
  getJSONDataLkgA(): Observable<any> {
    // Use the relative path from the app root, the assets folder is mapped automatically
    return this.http.get('./assets/jsontestdata/lkga.json');
  }


  
  private handleError(err: HttpErrorResponse) {
     
    // You can enhance this to map server error format to UI-friendly messages
    let msg = 'Unknown error';
    if (err.error instanceof ErrorEvent) {
      msg = `Client/network error: ${err.error.message}`;
    } else {
      msg = `Server error ${err.status}: ${JSON.stringify(err.error)}`;
    }
    return throwError(() => new Error(msg));
  }



}
