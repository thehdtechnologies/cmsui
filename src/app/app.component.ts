import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router'
import { Observable } from 'rxjs';
import { GblsharedService} from './gblshared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'cms';

  public InstituteType :string | undefined;

  constructor(private route: ActivatedRoute, private _service:GblsharedService) {
    // Inject ActivatedRoute
    this.InstituteType="" ;
  }

  ngOnInit()
  {
    
      this.route.queryParamMap.subscribe((params: ParamMap) => {        
      //  type 1 = College
      //  type 2 = School
      this.InstituteType = params.get('type')?.toString();
      if (this.InstituteType != null)
      {
        this._service.setInstituteType(this.InstituteType.toUpperCase());
      }
        


  });



  }
}
