import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.scss']
})
export class CategoriesBarComponent implements OnInit {

  @Output() oldSchool = new EventEmitter<void>();
  @Output() newModels = new EventEmitter<void>();
  @Output() legendary = new EventEmitter<void>();
  @Output() leMans = new EventEmitter<void>();
  @Output() goldenDecade = new EventEmitter<void>();
  @Output() newMillenial = new EventEmitter<void>();
  @Output() Bikes = new EventEmitter<void>();

  constructor() {
  }

  active: boolean = false

  ngOnInit(): void {
  }

  categOldSchool() {
    this.oldSchool.emit()
  }

  categNewModels() {
    this.newModels.emit()
  }

  categLegendary() {
    this.legendary.emit()
  }

  categLeMans() {
    this.leMans.emit()
  }

  categGoldenDecade() {
    this.goldenDecade.emit()
  }

  categNewMillenal() {
    this.newMillenial.emit()
  }

  categBikes() {
    this.Bikes.emit()
  }

  toggleActive() {
    if (this.active == false) {
      this.active = true
    } else if (this.active == true){
      this.active = false
    }
  }


}
