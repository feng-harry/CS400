import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QueryFormComponent } from './query-form/query-form.component';
import { ItemInfoComponent } from './item-info/item-info.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryFormComponent,
    ItemInfoComponent,
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
