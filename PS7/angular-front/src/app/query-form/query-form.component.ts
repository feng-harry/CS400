import {Component, OnInit} from '@angular/core';
import { PriceService } from "../services/price.service";
import {PRICE} from "../models/itemPrice";

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})

export class QueryFormComponent implements OnInit {
  itemId: string;

  itemPrice: PRICE;

  getPrice(): void {
    console.log(`This is what was entered into the form box: ${this.itemId}.`);
    // this.itemPrice = this.priceService.getPrice(this.formValues.itemId);
    this.priceService.getPrice(this.itemId).subscribe((data: PRICE) => {
      this.itemPrice = data;
    })
    // return this.itemPrice;
  }

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    console.log('OnInit Query-form-component.ts');
  }

}
