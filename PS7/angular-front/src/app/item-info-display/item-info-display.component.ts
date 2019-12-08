import {Component, Input, OnInit} from '@angular/core';
import { ItemInfo } from "../models/itemInfo";

@Component({
  selector: 'app-item-info-display',
  templateUrl: './item-info-display.component.html',
  styleUrls: ['./item-info-display.component.css']
})
export class ItemInfoDisplayComponent implements OnInit {

  @Input()
  itemInfoValues: ItemInfo;

  constructor() { }

  ngOnInit() {
  }

}
