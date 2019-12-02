import {Component, Input, OnInit} from '@angular/core';
import { PriceService } from "../services/price.service";

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {
  formValues: any = {
    itemId: ''
  };

  itemPrice = "";

  getPrice(): void {
    console.log(`This is what was entered into the form box: ${this.formValues.itemId}.`);
    this.itemPrice = this.priceService.getPrice(this.formValues.itemId);
    console.log(`The price of item ${this.formValues.itemId} is ${this.itemPrice}.`);
  }

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    console.log('OnInit Query-form-component.ts');
  }

}
