import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BmwListComponent} from './Components/bmw-list/bmw-list.component';
import {BmwDescriptionComponent} from './Components/bmw-description/bmw-description.component';
import {BmwSingleItemComponent} from './Components/bmw-list/bmw-single-item/bmw-single-item.component';
import {CategoriesBarComponent} from './Shared/categories-bar/categories-bar.component';
import {HeaderBarComponent} from './Shared/header-bar/header-bar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {BmwService} from "./services/bmw.service";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {DialogComponent} from "./Shared/header-bar/AddBMWDialog/dialog-component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    CategoriesBarComponent,
    BmwListComponent,
    BmwDescriptionComponent,
    BmwSingleItemComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    DragDropModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [BmwService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
