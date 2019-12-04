import {Component, Input, OnInit} from '@angular/core';
import { PriceService } from "../services/price.service";
import {PRICE} from "../models/itemPrice";

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {
  formValues: any = {
    itemId: ''
  };

  itemPrice: PRICE;

  getPrice(): PRICE {
    console.log(`This is what was entered into the form box: ${this.formValues.itemId}.`);
    this.itemPrice = this.priceService.getPrice(this.formValues.itemId);
    return this.itemPrice;
  }

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    console.log('OnInit Query-form-component.ts');
  }

}
