import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from "rxjs";
import {ItemInfo} from "../models/itemInfo";

@Injectable({
  providedIn: 'root'
})
export class ItemDescService {
  // itemInfo: ItemInfo;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  // callApi(url): Observable<any> {
  //   return this.http.get<ItemInfo>(url, this.httpOptions);
  // }

  // getItemInfo(itemId): Observable<ItemInfo>{
  //   const apiUrl = "http://localhost:3000/item?id=" + itemId;
  //   this.callApi(apiUrl).subscribe((data: ItemInfo) => {
  //     console.log(data)
  //     this.itemInfo = data;
  //   });
  //   return of(this.itemInfo);
  // }

  getItemInfo(itemId): Observable<ItemInfo>{
    const apiUrl = "http://localhost:3000/item?id=" + itemId;
    return this.http.get<ItemInfo>(apiUrl, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}
