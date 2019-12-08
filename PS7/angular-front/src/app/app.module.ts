import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QueryFormComponent } from './query-form/query-form.component';
import { ItemInfoGetComponent } from './item-info-get/item-info-get.component';
import { ItemInfoMainComponent } from './item-info-main/item-info-main.component';
import { ItemInfoDisplayComponent } from './item-info-display/item-info-display.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryFormComponent,
    ItemInfoGetComponent,
    ItemInfoMainComponent,
    ItemInfoDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
