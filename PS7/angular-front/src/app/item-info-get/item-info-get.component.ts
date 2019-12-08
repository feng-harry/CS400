import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ItemInfo} from "../models/itemInfo";
import {ItemDescService} from "../services/item-desc.service";

@Component({
  selector: 'app-item-info-get',
  templateUrl: './item-info-get.component.html',
  styleUrls: ['./item-info-get.component.css']
})
export class ItemInfoGetComponent implements OnInit {
  itemId: string;

  @Output()
  itemInfoValues = new EventEmitter<ItemInfo>();


  getItemInfo(): void {
    console.log(`This is what was entered into the form box: ${this.itemId}.`);
    this.itemDescService.getItemInfo(this.itemId).subscribe((data: ItemInfo) => {
      this.itemInfoValues.emit(data);
      // this.itemInfoValues = data;
    });
    // this.itemInfoValues = this.itemDescService.getItemInfo(this.itemId);
    // return this.itemInfoValues;
  }

  constructor(private itemDescService: ItemDescService) { }

  ngOnInit() {
  }

}
