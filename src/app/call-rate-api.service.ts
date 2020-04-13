import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallRateApiService {

  constructor(private http: HttpClient) { }
  public convert(from:String,to:String,amount:number){
    var url = "https://rate-api.herokuapp.com/convert/"+from+"/"+to+"/"+amount;
    return this.http.get(url);
  }
}
