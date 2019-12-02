import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {PRICE} from "../models/itemPrice";


@Injectable({
  providedIn: 'root'
})
export class PriceService {

  priceInfo: PRICE = {
    price: ""
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };



  callApi(url): Observable<any> {
    return this.http.get<PRICE>(url, this.httpOptions);
  }

  getPrice(itemId): any{
    const apiUrl = "http://localhost:3000/price?id=" + itemId;
    this.callApi(apiUrl).subscribe((data: PRICE) => {
      this.priceInfo = {price: data['price']};
      console.log(this.priceInfo);
      return this.priceInfo.price;
    });
  }

  constructor(private http: HttpClient) { }


}
