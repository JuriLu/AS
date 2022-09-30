import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ASCarsListComponent} from './components/ASCars-list/ASCars-list.component';
import {ASCarsDescriptionComponent} from './components/ASCars-description/ASCars-description.component';
import {ASCarsSingleItemComponent} from './components/ASCars-list/ASCars-single-item/ASCars-single-item.component';
import {CategoriesBarComponent} from './shared/categories-bar/categories-bar.component';
import {HeaderBarComponent} from './shared/header-bar/header-bar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {AScarsService} from "./services/AScars.service";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {AddDialogComponent} from "./components/ASCarsAddDialog/add-dialog-component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    CategoriesBarComponent,
    ASCarsListComponent,
    ASCarsDescriptionComponent,
    ASCarsSingleItemComponent,
    AddDialogComponent,
    FooterComponent
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
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [AScarsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
