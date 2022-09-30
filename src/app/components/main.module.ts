import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderBarComponent} from "./header-bar/header-bar.component";
import {CategoriesBarComponent} from "./categories-bar/categories-bar.component";
import {ASCarsListComponent} from "./ASCars-list/ASCars-list.component";
import {ASCarsDescriptionComponent} from "./ASCars-description/ASCars-description.component";
import {ASCarsSingleItemComponent} from "./ASCars-list/ASCars-single-item/ASCars-single-item.component";
import {AddDialogComponent} from "./add-dialog/add-dialog-component";
import {FooterComponent} from "./footer/footer.component";
import {MainRoutingModule} from "./main.routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {BrowserModule} from "@angular/platform-browser";
import {ASCarsAddComponent} from "./ASCars-add/ASCars-add.component";


@NgModule({
  declarations: [
    HeaderBarComponent,
    CategoriesBarComponent,
    ASCarsListComponent,
    ASCarsDescriptionComponent,
    ASCarsSingleItemComponent,
    AddDialogComponent,
    FooterComponent,
    ASCarsAddComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
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
  exports:[]
})
export class MainModule { }
