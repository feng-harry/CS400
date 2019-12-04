import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {ItemInfo} from "../models/itemInfo";

@Injectable({
  providedIn: 'root'
})
export class ItemDescService {
  itemInfo: ItemInfo;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  callApi(url): Observable<any> {
    return this.http.get<ItemInfo>(url, this.httpOptions);
  }

  getItemInfo(itemId): ItemInfo{
    const apiUrl = "http://localhost:3000/item?id=" + itemId;
    this.callApi(apiUrl).subscribe((data: ItemInfo) => {
      this.itemInfo = {itemName: data['name'], itemDesc: data['desc'], itemImgUrl: data['imgUrl']};
      console.log(this.itemInfo);
    });
    return this.itemInfo;
  }

  constructor(private http: HttpClient) { }
}
