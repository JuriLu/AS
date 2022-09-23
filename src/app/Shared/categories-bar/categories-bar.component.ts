import {Component, OnInit} from '@angular/core';
import {AScarsService} from "../../services/AScars.service";
import {CategoryCars} from "../../Models/AScars.model";

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.scss']
})
export class CategoriesBarComponent implements OnInit {
  active: boolean = false

  constructor(private AScars : AScarsService) {}


  ngOnInit(): void {}

  NewModels() {
    this.AScars.selectingCategory(CategoryCars.NEWMODEL);
  }

  OldSchool() {
    this.AScars.selectingCategory(CategoryCars.OLDSCHOOL);
  }

  Legend() {
    this.AScars.selectingCategory(CategoryCars.LEGEND);
  }

  LeMans() {
    this.AScars.selectingCategory(CategoryCars.LEMANS);
  }

  Electric() {
    this.AScars.selectingCategory(CategoryCars.ELECTRIC);
  }

  Bikes() {
    this.AScars.selectingCategory(CategoryCars.BIKES);
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
