import { Component, OnInit } from '@angular/core';
import currencyJson from '../assets/currencies.json';
import {CallRateApiService} from './call-rate-api.service';
import { fromEventPattern } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  
  constructor(private rateApi: CallRateApiService){}
  ngOnInit(){
    console.log(currencyJson);
  }

  title = 'RateConvertor';
  submitted : boolean = true;
  currencyList: any = currencyJson;
  resultData: any;
  test(formData: any){
   this.rateApi.convert(formData.from,formData.to,formData.amount).subscribe(data=>{
      this.resultData = <number>data;
      if(this.resultData==0){
          this.resultData = "Currency not supported yet";
      }
      this.submitted = false;
   })
   
  }
 

}
