import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderBarComponent} from "./header-bar/header-bar.component";
import {CategoriesBarComponent} from "./categories-bar/categories-bar.component";
import {ASCarsListComponent} from "./ASCars-list/ASCars-list.component";
import {ASCarsDescriptionComponent} from "./ASCars-description/ASCars-description.component";
import {ASCarsSingleItemComponent} from "./ASCars-list/ASCars-single-item/ASCars-single-item.component";
import {AddDialogComponent} from "./ASCars-add/add-dialog/add-dialog-component";
import {FooterComponent} from "./footer/footer.component";
import {MainRoutingModule} from "./main.routing.module";
import {ASCarsAddComponent} from "./ASCars-add/ASCars-add.component";
import {SharedModule} from "../shared/shared.module";


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
    SharedModule,
  ],
  exports:[]
})
export class MainModule { }
