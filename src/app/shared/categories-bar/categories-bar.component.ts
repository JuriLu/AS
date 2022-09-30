import {Component, OnInit} from '@angular/core';
import {CategoryCars} from "../../Models/AScars.model";
import {CategoryService} from "../../services/category.service";

interface MenuItem {
  label: string,
  category: CategoryCars;
}

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.scss']
})
export class CategoriesBarComponent implements OnInit {
  active: boolean = false
  menuItems: MenuItem[] = [
    {label: 'New Model', category: CategoryCars.NEWMODEL},
    {label: 'Old School', category: CategoryCars.OLDSCHOOL},
    {label: 'Legend', category: CategoryCars.LEGEND},
    {label: 'LeMans', category: CategoryCars.LEMANS},
    {label: 'Electric', category: CategoryCars.ELECTRIC},
    {label: 'Bikes', category: CategoryCars.BIKES},
    {label: '...', category: CategoryCars.BIKES},
    {label: '...', category: CategoryCars.BIKES},
  ]

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  navigateCategory(category: CategoryCars): void {
    this.categoryService.selectingCategory(category);
  }

  toggleActive() {
    this.active = !this.active
  }


}
