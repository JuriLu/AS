import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ASCarsListComponent} from "./ASCars-list/ASCars-list.component";
import {ASCarsDescriptionComponent} from "./ASCars-description/ASCars-description.component";
import {ASCarsSingleItemComponent} from "./ASCars-list/ASCars-single-item/ASCars-single-item.component";
import {ASCarsAddDialogComponent} from "./ASCars-add/ASCars-add-dialog/ASCars-add-dialog-component";
import {MainRoutingModule} from "./main.routing.module";
import {ASCarsAddComponent} from "./ASCars-add/ASCars-add.component";
import {SharedModule} from "../shared/shared.module";
import {ASCarsAdsComponent} from "./ASCars-ads/ASCars-ads.component";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {InputNumberModule} from "primeng/inputnumber";


@NgModule({
  declarations: [
    ASCarsListComponent,
    ASCarsDescriptionComponent,
    ASCarsSingleItemComponent,
    ASCarsAddDialogComponent,
    ASCarsAddComponent,
    ASCarsAdsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    InputNumberModule
  ],
  exports:[]
})
export class MainModule { }
