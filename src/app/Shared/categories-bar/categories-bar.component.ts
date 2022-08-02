import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.scss']
})
export class CategoriesBarComponent implements OnInit {

 @Output() oldSchool = new EventEmitter<void>();
 @Output() newModels = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  categOldSchool(){
    this.oldSchool.emit()
  }

  categNewModels(){
    this.newModels.emit()
  }

}
