import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AScarsService} from "../../services/AScars.service";
import {CategoryCars} from "../../Models/AScars.model";

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.scss']
})
export class CategoriesBarComponent implements OnInit {

  // @Output() oldSchool = new EventEmitter<void>();
  // @Output() newModels = new EventEmitter<void>();
  // @Output() legendary = new EventEmitter<void>();
  // @Output() leMans = new EventEmitter<void>();
  // @Output() electric = new EventEmitter<void>();
  // @Output() newMillenial = new EventEmitter<void>();
  // @Output() Bikes = new EventEmitter<void>();

  constructor(private AScars : AScarsService) {
  }

  active: boolean = false

  ngOnInit(): void {
  }

  NewModels() {
    this.AScars.giveValue(CategoryCars.NEWMODEL);
  }

  OldSchool() {
    this.AScars.giveValue(CategoryCars.OLDSCHOOL);
  }

  Legend() {
    this.AScars.giveValue(CategoryCars.LEGEND);
  }

  LeMans() {
    this.AScars.giveValue(CategoryCars.LEMANS);
  }

  Electric() {
    this.AScars.giveValue(CategoryCars.ELECTRIC);
  }

  Bikes() {
    this.AScars.giveValue(CategoryCars.BIKES);
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
