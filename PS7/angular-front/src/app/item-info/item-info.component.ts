import { Component, OnInit } from '@angular/core';
import { ItemDescService } from "../services/item-desc.service";
import {ItemInfo} from "../models/itemInfo";

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})

export class ItemInfoComponent implements OnInit {
  formValues: any = {
    itemId: ''
  };

  itemInfoValues: ItemInfo;

  getItemInfo(): ItemInfo {
    console.log(`This is what was entered into the form box: ${this.formValues.itemId}.`);
    this.itemInfoValues = this.itemDescService.getItemInfo(this.formValues.itemId);
    return this.itemInfoValues;
  }

  constructor(private itemDescService: ItemDescService) { }


  ngOnInit() {
  }

}
