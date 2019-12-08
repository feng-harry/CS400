import { Component, OnInit } from '@angular/core';
import { ItemInfo } from "../models/itemInfo";

@Component({
  selector: 'app-item-info-main',
  templateUrl: './item-info-main.component.html',
  styleUrls: ['./item-info-main.component.css']
})
export class ItemInfoMainComponent implements OnInit {
  parentItemInfoValues: ItemInfo;

  updateData(event) {
    this.parentItemInfoValues = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
