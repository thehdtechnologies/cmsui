import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GblsharedService } from '../gblshared.service';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent {

  public InstituteType :string | undefined;
  public userName : string | undefined;
  public userPass : string | undefined;

  public erruserName : boolean | undefined;
  public erruserPass : boolean | undefined;

  public boolInvalidLogin : boolean | undefined;

  public logo :string| undefined;

  constructor (private router: Router, private sharedService: GblsharedService) {
    
    this.sharedService.dispInstituteType$.subscribe(name => { this.InstituteType = name; });    
    
  }

  ngOnInit()
  {
    if (this.InstituteType=="C")
    {
      // 1 : Colleg 
      // 2 : School
      console.log("COLLEGE");
      this.logo="assets/images/grdlogoonly.png";
    }
    else if (this.InstituteType=="S") 
    {
      console.log("SCHOOL");
      this.logo="assets/images/royalmatriclogo.png";
    }
  }
  fnClearErrUserName()
  {
    this.erruserName=false;
    this.boolInvalidLogin=false;
  }
  fnClearErrUserPass()
  {
    this.erruserPass=false;
    this.boolInvalidLogin=false;
  }
  fnSubmit()
  {
      let submitstatus = false;

      this.erruserName=false;
      this.erruserPass=false;
      this.boolInvalidLogin=false;

     if(this.userName=="" || this.userName==undefined )
     {
        submitstatus = false;
        this.erruserName=true;
     }
     if(this.userPass=="" || this.userPass==undefined)
     {
        submitstatus = false;
        this.erruserPass=true;
     }

     if (this.userName=="lkg" && this.userPass=="lkg")
     {
        submitstatus = true;        
     }
    else if  (this.userName=="pharmd" && this.userPass=="pharmd")
     {
        submitstatus = true;
     }
     else 
     {
        this.boolInvalidLogin=true;
     }

     if (submitstatus==true) {
     this.router.navigate(['/home']);
     } 
  }

}
