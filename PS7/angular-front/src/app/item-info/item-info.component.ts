import { Component, OnInit } from '@angular/core';
import { ItemDescService } from "../services/item-desc.service";
import { ItemInfo } from "../models/itemInfo";

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})

export class ItemInfoComponent implements OnInit {
  itemId: string;

  itemInfoValues: ItemInfo;

  getItemInfo(): void {
    console.log(`This is what was entered into the form box: ${this.itemId}.`);
    this.itemDescService.getItemInfo(this.itemId).subscribe((data: ItemInfo) => {
      this.itemInfoValues = data;
    });
    // this.itemInfoValues = this.itemDescService.getItemInfo(this.itemId);
    // return this.itemInfoValues;
  }

  constructor(private itemDescService: ItemDescService) { }


  ngOnInit() {
  }


}
