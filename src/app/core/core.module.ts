import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AScarsService} from "./services/AScars.service";
import {ASnewsService} from "./services/ASnews.service";
import {CategoryService} from "./services/category.service";



@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  providers:[
    AScarsService,
    ASnewsService,
    CategoryService
  ]
})
export class CoreModule { }
