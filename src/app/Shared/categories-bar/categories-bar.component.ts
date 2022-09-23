import {Component, OnInit} from '@angular/core';
import {AScarsService} from "../../services/AScars.service";
import {CategoryCars} from "../../Models/AScars.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.scss']
})
export class CategoriesBarComponent implements OnInit {
  active: boolean = false

  constructor(private categoryService: CategoryService) {
  }


  ngOnInit(): void {
  }

  NewModels() {
    this.categoryService.selectingCategory(CategoryCars.NEWMODEL);
  }

  OldSchool() {
    this.categoryService.selectingCategory(CategoryCars.OLDSCHOOL);
  }

  Legend() {
    this.categoryService.selectingCategory(CategoryCars.LEGEND);
  }

  LeMans() {
    this.categoryService.selectingCategory(CategoryCars.LEMANS);
  }

  Electric() {
    this.categoryService.selectingCategory(CategoryCars.ELECTRIC);
  }

  Bikes() {
    this.categoryService.selectingCategory(CategoryCars.BIKES);
  }

  // NewMillenal() {
  //   this.newMillenial.emit()
  // }


  toggleActive() {
    // if (this.active == false) {
    //   this.active = true
    // } else if (this.active == true){
    //   this.active = false
    // }x
    this.active = !this.active
  }


}
