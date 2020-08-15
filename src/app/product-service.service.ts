import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'pushId':'OneSignal',
      'deviceInfo':'Apple',
      'secretToken': ​'appmobile',
      'customerId': ​'b7c13a1e-b99e-4069-8213-02ba9833110e'
      
      })
    };

    // const headerDict = {
    //   // 'Access-Control-Allow-Origin':'*',
    //   'pushId':'OneSignal',
    //   'deviceInfo':'Apple',
    //   'secretToken': ​'appmobile',
    //   'customerId': ​'b7c13a1e-b99e-4069-8213-02ba9833110e'
      
    // }
    
    return this.http.get<any>('http://tabup.lightspeedsolutions.com/Api/GetCategories', httpOptions);

  }
  // getProducts(): void {
  //   console.log('Nikhil Chavan');
  // }
}
