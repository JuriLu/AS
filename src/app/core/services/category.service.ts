import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CategoryCars} from "../models/AScars.model";

@Injectable()
export class CategoryService {

  private categorySubject = new BehaviorSubject(CategoryCars.NEWMODEL);

  category$: Observable<string> = this.categorySubject.asObservable();

  constructor() {
  }

  selectingCategory(category) {
    this.categorySubject.next(category)
  }
}
