import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../core/services/category.service";
import {CategoryCarsEnum} from "../../enum/categoryCars.enum";

interface MenuItem {
  label: string,
  category: CategoryCarsEnum;
}

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.scss']
})
export class CategoriesBarComponent implements OnInit {
  active: boolean = false
  menuItems: MenuItem[] = [
    {label: 'New Model', category: CategoryCarsEnum.NEWMODEL},
    {label: 'Old School', category: CategoryCarsEnum.OLDSCHOOL},
    {label: 'Legend', category: CategoryCarsEnum.LEGEND},
    {label: 'LeMans', category: CategoryCarsEnum.LEMANS},
    {label: 'Electric', category: CategoryCarsEnum.ELECTRIC},
    {label: 'Bikes', category: CategoryCarsEnum.BIKES},
    {label: '...', category: CategoryCarsEnum.BIKES},
    {label: '...', category: CategoryCarsEnum.BIKES},
  ]

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  navigateCategory(category: CategoryCarsEnum): void {
    this.categoryService.selectingCategory(category);
  }

  toggleActive() {
    this.active = !this.active
  }


}
