import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './Shared/header-bar/header-bar.component';
import { CategoriesBarComponent } from './Shared/categories-bar/categories-bar.component';
import { BmwListComponent } from './Components/bmw-list/bmw-list.component';
import { BmwSingleComponent } from './Components/bmw-single/bmw-single.component';
import { NewsComponent } from './Shared/header-bar/news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    CategoriesBarComponent,
    BmwListComponent,
    BmwSingleComponent,
    NewsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
