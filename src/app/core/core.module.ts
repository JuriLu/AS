import { NgModule } from '@angular/core';
import {AScarsService} from "./services/AScars.service";
import {ASnewsService} from "./services/ASnews.service";
import {CategoryService} from "./services/category.service";


@NgModule({
  providers:[
    AScarsService,
    ASnewsService,
    CategoryService
  ]
})
export class CoreModule { }
