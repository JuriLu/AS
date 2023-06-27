import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {HeaderBarComponent} from "./components/header-bar/header-bar.component";
import {CategoriesBarComponent} from "./components/categories-bar/categories-bar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RouterOutlet} from "@angular/router";

const MaterialComponents = [
  MatCardModule,
  MatIconModule,
  DragDropModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  ReactiveFormsModule,
  NgOptimizedImage,
]

@NgModule({
  declarations: [
    HeaderBarComponent,
    CategoriesBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialComponents,
    RouterOutlet
  ],
  exports: [MaterialComponents, HeaderBarComponent, CategoriesBarComponent, FooterComponent]
})
export class SharedModule { }
